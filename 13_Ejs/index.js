// npm i ejs

const express = require('express')

const urlRoute = require('./routes/url')
const staticUrl = require('./routes/staticUrl')

const { connectToMongoDb } = require('./connection')

const path = require('path')

const port = 8000;
const app = express();

connectToMongoDb('mongodb://127.0.0.1:27017/short-url')

// I want to do SSR nd engine i use ejs
app.set("view engine", "ejs")

// to let know my express where my ejs files are
app.set("views", path.resolve("./views"))

app.use(express.json())

// to parse form data
app.use(express.urlencoded({extended: false}))

app.use('/urls',urlRoute)

app.use('/', staticUrl)

app.listen(port, ()=> console.log(`Server started at PORT ${port}`))