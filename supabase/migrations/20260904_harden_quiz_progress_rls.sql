-- =============================================================================
-- Claude (Opus 5) | 2026-09-04 | Blindaje de RLS para public.quiz_progress
-- =============================================================================
-- CONTEXTO
--   Auditoria del 2026-09-04: un GET a /rest/v1/quiz_progress usando unicamente
--   la anon key publica (que viaja en supabase-sync.js y esta en un repo publico)
--   devolvio HTTP 200 con las filas completas. Es decir, la lectura anonima esta
--   abierta y, por simetria con el upsert que hace la app, tambien la escritura.
--
-- COMO APLICAR (no se pudo automatizar: esta sesion no tiene service_role key)
--   1. https://supabase.com/dashboard/project/suplwoyiviapsnowzfcb/sql/new
--   2. Pegar este archivo completo y ejecutar (Run).
--   3. Verificar en Database > Policies que quiz_progress muestre RLS "Enabled".
--
-- QUE HACE / QUE NO HACE
--   SI  -> Activa RLS y deja politicas explicitas y auditables.
--   SI  -> Bloquea DELETE y TRUNCATE: hoy un tercero podria vaciar la tabla.
--   NO  -> No puede impedir que alguien con la anon key lea filas ajenas: sin
--          autenticacion no hay forma de probar la propiedad de un device_id.
--          Para eso esta la FASE 2 al final (opcional, requiere cambio de app).
-- =============================================================================

-- 1) Activar RLS -------------------------------------------------------------
alter table public.quiz_progress enable row level security;
alter table public.quiz_progress force row level security;

-- 2) Limpiar politicas permisivas heredadas ----------------------------------
do $$
declare pol record;
begin
  for pol in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'quiz_progress'
  loop
    execute format('drop policy if exists %I on public.quiz_progress', pol.policyname);
  end loop;
end $$;

-- 3) Politicas explicitas ----------------------------------------------------
-- Se mantiene el acceso que la app necesita hoy (leer/crear/actualizar su fila),
-- pero queda declarado en el catalogo en vez de depender de RLS apagado.

create policy "anon puede leer progreso"
  on public.quiz_progress for select
  to anon, authenticated
  using (true);

create policy "anon puede crear su fila"
  on public.quiz_progress for insert
  to anon, authenticated
  with check (device_id is not null and length(device_id) >= 8);

create policy "anon puede actualizar su fila"
  on public.quiz_progress for update
  to anon, authenticated
  using (true)
  with check (device_id is not null and length(device_id) >= 8);

-- 4) DELETE: sin politica => negado por RLS. Ademas se revoca el privilegio.
revoke delete, truncate on public.quiz_progress from anon, authenticated;

-- 5) Verificacion ------------------------------------------------------------
select
  (select relrowsecurity from pg_class where oid = 'public.quiz_progress'::regclass) as rls_activo,
  (select count(*) from pg_policies
    where schemaname = 'public' and tablename = 'quiz_progress')                     as politicas;

-- =============================================================================
-- FASE 2 (OPCIONAL) — Aislamiento real por dispositivo con secreto de fila
-- =============================================================================
-- Requiere tambien un cambio en supabase-sync.js (enviar la cabecera). No
-- ejecutar sin coordinar ambos lados o la sincronizacion dejara de funcionar.
--
-- alter table public.quiz_progress add column if not exists device_secret text;
--
-- drop policy if exists "anon puede leer progreso" on public.quiz_progress;
-- create policy "solo mi fila con mi secreto"
--   on public.quiz_progress for select
--   to anon, authenticated
--   using (
--     device_secret is null  -- filas antiguas migradas
--     or device_secret = current_setting('request.headers', true)::json->>'x-device-secret'
--   );
--
-- Lado cliente (supabase-sync.js), al crear el cliente:
--   supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
--     global: { headers: { 'x-device-secret': getDeviceSecret() } }
--   });
-- donde getDeviceSecret() genera y persiste un secreto aleatorio en localStorage
-- junto al _device_id.
-- =============================================================================
