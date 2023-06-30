const fs = require('fs')

//sync read
const data = fs.readFileSync('./documents/myfile.txt')

console.log('sync read =', data)
console.log('string =',data.toString())