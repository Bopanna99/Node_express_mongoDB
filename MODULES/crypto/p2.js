// hmac => hash based message authentication code

let crypto = require('crypto')

let hash = crypto.createHmac('sha256','test1234')

let input = "Welcome to node js"

let res = hash.update(input).digest('base64') // binary,hex,base64,base64url

console.log('output =', res)