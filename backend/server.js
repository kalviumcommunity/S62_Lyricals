if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config()
}
const express=require('express')
const connectDataBase=require('./DB/database.js')
const mongoose=require('mongoose')


const app=express();
const PORT=process.env.PORT || 3000


app.get('/ping',(req,res)=>{
    return res.send('pong')
})

app.get('/',(req,res)=>{
    const dbStatus=mongoose.connection.readyState===1?'Connected Successfully':'Connection Failed'
    res.send({dbStatus})
})

app.listen(PORT,async()=>{
    connectDataBase()
    console.log(`server is running on http://localhost:${PORT}`)
    
    
})


