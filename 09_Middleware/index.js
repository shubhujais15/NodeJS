const express = require('express')
const users = require("../08_RestApi/MOCK_DATA.json")
const fs = require('fs')

const app = express();
const port = 8000;

// Middleware - Plugin
// To help in post data 
app.use(express.urlencoded({extended: false}))

// next pointing to next functions either it is middleware function or http methods func
app.use((req,res,next)=>{
    fs.appendFile('log.txt',`${Date.now()}: ${req.method}: ${req.path}`, (err,data) => {
        next();
    })
    console.log("In middleware 1")
    // return res.end("end") // It return the response to client and stop the request to reach other methods thats why we use next()
    // next()
})

app.use((req,res,next)=>{
    console.log("In middleware 2")
    req.myUserName = 'Sandy'
    // return res.end("end") // It return the response to client and stop the request to reach other methods thats why we use next()
    next()
})

app.get('/users',(req,res)=>{
    console.log("name from",req.myUserName)
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html)
})

// Routes
app.get('/api/users', (req,res)=>{
    res.setHeader("myName", "Sandy")
    return res.json(users)
})


// Dynamic Path parameters -- using ":id"
app.get("/api/users/:id", (req,res) => {
    const id = Number(req.params.id);  // This id return string so we convert it into number
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

// Post
app.post('/api/users', (req,res)=>{
    // Create new user
    const body = req.body;
    // console.log(body)
    users.push({...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        return res.json({status:"Successful", id: users.length})
    })
    
})

// Patch
app.patch('/api/users/:id', (req,res)=>{
    // update user with id
    return res.json({status:"pending"})
})
app.delete('/api/users', (req,res)=>{
    // Delete user with id
    return res.json({status:"pending"})
})



// Doing many methods on a same route so we can write like this also

app.route("/api/users/:id")
   .get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
   })
   .put((req,res)=>{
    // Edit user with id
    return res.json({status:"pending"})
   })
   .delete((req,res)=>{
    // Delete user with id
    return res.json({status:"pending"})
   })

 

app.listen(port, ()=> console.log("server started at ",port))