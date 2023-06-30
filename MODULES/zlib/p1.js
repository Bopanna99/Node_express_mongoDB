const zlib = require('zlib')
const fs = require('fs')

let gzip = zlib.createGzip()

let r = fs.createReadStream('myfile.txt')
let w = fs.createWriteStream('test.gz')

r.pipe(gzip).pipe(w)

console.log('zip generated')