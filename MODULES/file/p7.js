const fs = require('fs')

//async unlink

fs.unlink('./documents/test1.txt',function (err){
    if(err)throw err;
    console.log('file succesfuly deleted')
})