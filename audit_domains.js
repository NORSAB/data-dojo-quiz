const fs = require('fs');
const c = fs.readFileSync('questions_databricks.js', 'utf8');
const re = /"domain":\s*"([^"]+)"/g;
const d = {};
let m;
while ((m = re.exec(c)) !== null) {
    d[m[1]] = (d[m[1]] || 0) + 1;
}
const sorted = Object.entries(d).sort((a,b) => b[1] - a[1]);
sorted.forEach(([k,v]) => console.log(`${v.toString().padStart(3)} | ${k}`));
console.log('---');
console.log(`TOTAL: ${Object.values(d).reduce((a,b) => a+b, 0)} questions`);

// Now extract key concepts per domain
console.log('\n=== KEY CONCEPTS PER DOMAIN ===');
const lines = c.split('\n');
let currentQ = {};
const questions = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const promptMatch = line.match(/"prompt":\s*"(.+)"/);
    if (promptMatch) currentQ.prompt = promptMatch[1].substring(0, 120);
    const domainMatch = line.match(/"domain":\s*"([^"]+)"/);
    if (domainMatch) {
        currentQ.domain = domainMatch[1];
        questions.push({...currentQ});
        currentQ = {};
    }
}

// Group by domain and extract unique concepts
const domains = {};
questions.forEach(q => {
    if (!domains[q.domain]) domains[q.domain] = [];
    domains[q.domain].push(q.prompt);
});

Object.keys(domains).sort().forEach(domain => {
    console.log(`\n--- ${domain} (${domains[domain].length} questions) ---`);
    domains[domain].forEach((p, i) => console.log(`  ${i+1}. ${p}`));
});
