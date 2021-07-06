const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const mongoose = require('mongoose');
const router=require('./router/api')
const bodyParser=require('body-parser')

app.use(bodyParser.json())
app.use('/',router)

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log("db connected");
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

app.listen(9000,()=>{
    console.log("listenning in port 9000");
})