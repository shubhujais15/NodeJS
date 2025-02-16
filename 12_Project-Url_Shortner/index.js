const express = require('express')

const urlRoute = require('./routes/url')

const { connectToMongoDb } = require('./connection')

const port = 8000;
const app = express();

connectToMongoDb('mongodb://127.0.0.1:27017/short-url')

app.use(express.json())

app.use('/urls',urlRoute)

app.listen(port, ()=> console.log(`Server started at PORT ${port}`))