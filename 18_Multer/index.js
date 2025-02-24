const express = require('express')
const path = require('path')
const multer = require('multer')

// First initialize app
const port = 8000;
const app = express();

// Frontent se user jo v file upload krega use uploads folder me daal do
// upload variable here is basically a middleware
// const upload = multer({ dest: 'uploads/' })


// creating multer diskstorage to define how i want to store my file
const storage = multer.diskStorage({
    // In desination we told in which we have to store our file
    destination: function (req, file, cb) {
        // cb(error,folder_name)
        return cb(null, './uploads')
      },
      filename: function (req, file, cb) {
        // write file name manually
        return cb(null, `${Date.now()}-${file.originalname}`)
      }
});


const upload = multer({storage})


// second set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Third initialize middleware
app.use(express.json());

// Fourth create route
app.get("/", (req,res)=>{
    return res.render('homepage')
})

// I wrote upload.single bcz i upload single file 
// If i want to upload multiple files then and the files name from frontend are profileImg and coverImg
// upload.fields([{name: "profileImg"},{name:"coverImg"}])
app.post("/upload", upload.single("profileImg"), (req,res)=>{
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/")
})

// Fifth initialize server
app.listen(port,()=> console.log("Server started at PORT:8000"));
