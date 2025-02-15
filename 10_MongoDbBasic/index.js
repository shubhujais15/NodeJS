const express = require('express')
// const users = require("../08_RestApi/MOCK_DATA.json")
const fs = require('fs')
const mongoose = require('mongoose');
const { type } = require('os');

const app = express();
const port = 8000;

// Connection 
mongoose.connect('mongodb://127.0.0.1:27017/my-app-1')
.then(()=> console.log("MongoDb connected"))
.catch((err) => console.log("Mongo Error", err));

// Schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
},{timestamps: true});

// Now we create model
// the name 'user' is become my collection name 
const User = mongoose.model('user', userSchema);


// Middleware - Plugin
// To help in post data 
app.use(express.urlencoded({extended: false}))





app.get('/users',async (req,res)=>{
    // console.log("name from",req.myUserName)
    const allDbUsers = await User.find({})
    const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html)
})


// Routes
app.get('/api/users', async(req,res)=>{
    const allDbUsers = await User.find({})

    res.setHeader("X-myName", "Sandy")
    return res.json(allDbUsers)
})


// Post
app.post('/api/users', async (req,res)=>{
    // Create new user
    const body = req.body;
    // creating User
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    })
    // console.log(result)
    return res.status(201).json({msg: "Success"})
})




// Dynamic Path parameters -- using ":id"
app.get("/api/users/:id", async(req,res) => {
    const user = await User.findById(req.params.id)

    return res.json(user);
})



// Patch
app.patch('/api/users/:id', async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id, {last_name: 'Changed'})
    // update user with id
    return res.json({status:"success"})
})
app.delete('/api/users/:id', async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    // Delete user with id
    return res.json({status:"success"})
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