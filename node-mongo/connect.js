const {MongoClient} = require('mongodb')
const assert = require('assert')

const URL = `mongodb://localhost:27017/`

MongoClient.connect(URL , (err,resp)=>{
    if(err)
     assert.deepStrictEqual(err,null)
     console.log('mongodb connected succesfully')
})