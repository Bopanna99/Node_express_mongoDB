const { client } = require('./dbconnect')
const dbName = "usersdb"

async function main(){
    try{
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
        const finResp = await collection.findOne({email:"naveen@gmail.com"}) /* findOne()-read single user data */
        console.log(`users =`, finResp)
    }finally{
        await client.close()
    }
}

main().catch(err => console.log(err.message))