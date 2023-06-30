const fs = require('fs')

const data = "All file system operations have synchronous, callback, and promise-based forms, and are accessible using both commonJs syntax and ES6 Modules (ESM)";

//async write
fs.writeFile('./documents/test1.txt', data, function(err){
    if(err)throw err ;
    console.log('async file write operation Completed')
})