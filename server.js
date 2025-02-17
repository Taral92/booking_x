const express = require('express')
const db = require('./config/dbconnection')
require('dotenv').config()
const app= express()
const cors = require('cors')

db();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>res.json({message:'testing'}) )
app.use('/api',require('./routes/router'))

app.listen(process.env.PORT,()=> console.log(`server is listening on this ${process.env.PORT}`));
