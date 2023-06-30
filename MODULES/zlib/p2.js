const zlib = require('zlib')
const fs = require('fs')

const gzip = zlib.createUnzip()

let r = fs.createReadStream('test.gz')
let w = fs.createWriteStream('output.txt')

r.pipe(gzip).pipe(w)

console.log('un zip completed')