const http = require("http")
const express = require('express')


const app = express();
// created app for express

app.get("/", (req,res) => {
    return res.send("Hello from Home Page");
})

app.get("/about", (req,res) => {
    return res.send("Hello from About Page"+ " Heii " + req.query.name + " Your age is " + req.query.age);
})

 

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("server started"));

// we can write above two line like this...

app.listen(8000, () => console.log("Server Started"))