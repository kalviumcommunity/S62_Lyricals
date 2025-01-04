if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config()
}
const express=require('express')
const connectDataBase=require('./DB/database.js')

const app=express();
const PORT=process.env.PORT || 3000

app.get('/ping',(req,res)=>{
    return res.send('pong')
})

app.listen(PORT,()=>{
    connectDataBase()
    console.log(`server is running on http://localhost:${PORT}`)
})


