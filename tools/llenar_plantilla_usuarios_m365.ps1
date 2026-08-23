$ErrorActionPreference = 'Stop'

$template = 'C:\Users\Norman Sabillon 2022\Downloads\Import_User_Template.csv'
$output = 'C:\Users\Norman Sabillon 2022\Downloads\Import_User_Template_Corregido.csv'
$domain = 'norsabanalytics.onmicrosoft.com'

$people = @(
    @{ User='nsabillon'; First='Norman';    Last='Sabillon';   Role='Instructor' },
    @{ User='lloor';     First='Luis';      Last='Loor';       Role='Instructor' },
    @{ User='malverto';  First='Moises';    Last='Alverto';    Role='Analista BI' },
    @{ User='brodriguez';First='Benjamin';  Last='Rodriguez';  Role='Analista BI' },
    @{ User='dgamez';    First='Douglas';   Last='Gamez';      Role='Analista BI' },
    @{ User='ecerna';    First='Elias';     Last='Cerna';      Role='Analista BI' },
    @{ User='nzambrano'; First='Noldin';    Last='Zambrano';   Role='Analista BI' },
    @{ User='rcastillo'; First='Robinson';  Last='Castillo';   Role='Analista BI' },
    @{ User='sescobar';  First='Stefano';   Last='Escobar';    Role='Analista BI' },
    @{ User='wartega';   First='Wilton';    Last='Artega';     Role='Analista BI' },
    @{ User='jcastro';   First='Julissa';   Last='Castro';     Role='Analista BI' },
    @{ User='kespino';   First='Katherine'; Last='Espino';     Role='Analista BI' },
    @{ User='jperez';    First='Juan';      Last='Perez';      Role='Analista BI' },
    @{ User='egutierrez';First='Eduardo';   Last='Gutierrez';  Role='Analista BI' },
    @{ User='sgutierrez';First='Sergio';    Last='Gutierrez';  Role='Analista BI' },
    @{ User='laquino';   First='Luis';      Last='Aquino';     Role='Analista BI' },
    @{ User='dservin';   First='Dario';     Last='Servin';     Role='Analista BI' }
)

$headers = (Get-Content -LiteralPath $template -Encoding UTF8 -TotalCount 1).Split(',')

$rows = foreach ($p in $people) {
    $row = [ordered]@{}
    foreach ($header in $headers) { $row[$header] = '' }

    $row['Nombre de usuario'] = "$($p.User)@$domain"
    $row['Nombre'] = $p.First
    $row['Apellido'] = $p.Last
    $row['Nombre para mostrar'] = "$($p.First) $($p.Last)"
    $row['Puesto'] = $p.Role
    $row['Departamento'] = 'Curso Databricks'
    $row['País o región'] = 'Honduras'

    [pscustomobject]$row
}

$csvLines = @($headers -join ',')
$csvLines += foreach ($row in $rows) {
    ($headers | ForEach-Object { [string]$row.$_ }) -join ','
}
$csvLines | Set-Content -LiteralPath $output -Encoding utf8BOM

$check = Import-Csv -LiteralPath $output -Encoding UTF8
if ($check.Count -ne 17) { throw "Se esperaban 17 usuarios y se encontraron $($check.Count)." }
if (($check | Where-Object { -not $_.'Nombre de usuario' -or -not $_.'Nombre para mostrar' }).Count -gt 0) {
    throw 'Existen filas sin usuario o nombre para mostrar.'
}

Write-Output $output
Write-Output "Usuarios=$($check.Count); Columnas=$($headers.Count)"
