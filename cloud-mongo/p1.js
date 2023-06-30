const { client } = require('./dbconnect')
const dbName = "usersdb"

let data =[
    {
        name:"Naveen",
        email:"naveen@gmail.com"
    },
    {
        name:"Bopanna",
        email:"bopanna@gmail.com"
    },
    {
        name:"vijay",
        email:"vij@gmail.com"
    }

];

async function main(){
    try{
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
        const insResp = await collection.insertMany(data)
        console.log(`users data inserted succesfully`)
    }finally{
        await client.close()
    }
}

main().catch(err => console.log(err.message))