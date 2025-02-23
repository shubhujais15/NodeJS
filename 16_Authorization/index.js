// npm i ejs

const express = require('express')

const urlRoute = require('./routes/url')
const staticUrl = require('./routes/staticUrl')
const userRoute = require('./routes/user')

const { checkForAuthentication, restrictTo} = require("./middlewares/auth")

const { connectToMongoDb } = require('./connection')

const path = require('path')
const cookieParser = require('cookie-parser')

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

app.use(cookieParser());

app.use(checkForAuthentication)


// restrictToLoggedinUserOnly it is work as inline middleware her
app.use('/urls', restrictTo(["NORMAL", "ADMIN"]), urlRoute)

app.use('/', staticUrl)

app.use('/user', userRoute)



app.listen(port, ()=> console.log(`Server started at PORT ${port}`))