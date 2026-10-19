const fs = require('fs')
const path = require('path')

const deployInfo = { date: new Date().toISOString() }
fs.writeFileSync(
  path.join(__dirname, '..', 'deploy.json'),
  JSON.stringify(deployInfo, null, 2)
)
console.log('Deploy date set:', deployInfo.date)
