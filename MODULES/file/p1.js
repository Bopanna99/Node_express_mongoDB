const fs = require('fs')

//async read

fs.readFile('./documents/myfile.txt', function(err,data){
    if(err) throw err;
    console.log('async read =', data)
    console.log('string =', data.toString())
});