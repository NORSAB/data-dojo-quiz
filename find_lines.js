const fs = require('fs');
const content = fs.readFileSync('questions_databricks.js', 'utf-8');
const lines = content.split('\n');
const ids = ['db-da-4','db-da-8','db-da-67','db-da-71','db-da-80','db-da-111','db-da-114','db-da-124','db-da-136','db-da-152','db-da-231','db-da-283','db-da-286','db-da-287','db-da-288','db-da-289','db-da-290','db-da-342','db-da-343','db-da-344','db-da-345','db-da-346','db-da-347','db-da-348','db-da-349'];
ids.forEach(id => {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('"' + id + '"') && lines[i].includes('"id"')) {
      for (let j = i; j < Math.min(i + 40, lines.length); j++) {
        if (lines[j].includes('"explanation"')) {
          console.log(id + ' -> line ' + (j+1));
          break;
        }
      }
      break;
    }
  }
});
