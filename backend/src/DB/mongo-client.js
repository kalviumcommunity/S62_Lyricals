if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config()
}

const mongoClient=require('mongodb').MongoClient
console.log(process.env.DB_URL)

const mongoConnection=new mongoClient(process.env.DB_URL)


function getDB (){
    const db= mongoConnection.db("ASAP").collection('User')
    return db;

}

getDB()

module.exports={getDB,mongoConnection}