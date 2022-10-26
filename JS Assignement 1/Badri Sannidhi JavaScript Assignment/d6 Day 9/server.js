const express = require('express')
const app = express()
const port = 9090


app.get('/',(req,res)=>{
    res.send('Hello Badri')
})

app.listen(port,()=>{
    console.log("server is running on port 9090");
})

const userdata = '{"id":15196, "name":"Badri"}';
const usdata=JSON.parse(userdata)
app.get('/user',(req,res)=>{
    res.send(usdata)
})