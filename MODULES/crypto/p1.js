const crypto = require('crypto')

const hash = crypto.createHash('sha256') //sha => secured hash algorithm
let input = "hi this is my test messege";
let data = hash.update(input).digest('hex') //base64, base64url, binary, hex
console.log('data sha(256)=',data)