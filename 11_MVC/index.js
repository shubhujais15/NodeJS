const express = require('express')

const { connectMongoDb } = require('./connection')

const userRouter = require('./routes/user')

const { logReqRes } = require('./middleware/index')

const app = express();
const port = 8000;


connectMongoDb('mongodb://127.0.0.1:27017/my-app-1')



// Middleware - Plugin
// To help encode data means which type of data is coming  
app.use(express.urlencoded({extended: false}))


// call logReqRes middleware by passing file name to log in this file
app.use(logReqRes('log.txt'));


// /user pe koi v request aaye to wo route dhundega userRouter me
app.use('/users', userRouter);


 
app.listen(port, ()=> console.log("server started at ",port))