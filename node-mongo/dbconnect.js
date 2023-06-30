const assert = require('assert')
const { MongoClient } = require('mongodb')

//url
const URL =`mongodb://localhost:27017`
const db_name = `db_mongo_test`

//ref
const client = new MongoClient(URL)

async function main(){
    await client.connect();
    console.log(`mongodb connected succesfully`)
    return `..done`
}

main()
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  }).finally(() => client.close())