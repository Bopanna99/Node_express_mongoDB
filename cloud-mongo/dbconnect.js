const { MongoClient, ServerApiVersion } = require('mongodb')

const url = "mongodb+srv://Bopanna99:Bopanna99@cluster0.qe2yedm.mongodb.net/"

//const url = "mongodb://localhost:27017"

const client = new MongoClient(url,{
    serverApi :{
        version:ServerApiVersion.v1,
        deprecationErrors:true,
        strict:true
    }
})

module.exports = { client }

// async function main(){
//     try{
//         await client.connect()
//         console.log(`mongodb connected`)
//     } finally{
//         await client.close()
//     }
// }

// main().catch(err => console.log(err.message))