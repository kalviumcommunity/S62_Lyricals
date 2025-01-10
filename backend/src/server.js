if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config()
}

const express=require('express')
const connectDataBase=require('./DB/database.js')
const itemSchema=require('./Model/ProductModel.js')
const mongoose=require('mongoose')
const { getDb, mongoConnection }=require('./DB/mongo-client.js')

const app=express();
const PORT=process.env.PORT || 3000
app.use(express.json())


app.get('/ping',(req,res)=>{
    return res.send('pong')
})

app.get('/',async(req,res)=>{
    const checkStatus=await mongoConnection.connect();
    const readyState = mongoConnection.topology.isConnected()
        ? 'connected'
        : 'disconnected';
    res.send({readyState})

})


app.listen(PORT,async()=>{
    connectDataBase()
    console.log(`server is running on http://localhost:${PORT}`)
    
    
})


