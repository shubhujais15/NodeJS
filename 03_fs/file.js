// We require fs module for file manipulation
const fs = require("fs");

// Blocking operation (work using threads)
// sync... Writing in a file by creating it
// first argument is file name and type and second argument is string value that we want to write
// second argument is always a string
// fs.writeFileSync("./test.txt","Hello World");


// Non - Blocking operation 
// Async
// It need one more argument than sync to throw error
// third argument is mandatory
// fs.writeFile("./test.txt","Hello World Async", (err) => {})



// If we want to read the content of a file
// second argument specify the encoding of file content
// const result = fs.readFileSync("./test.txt","utf-8");
// console.log(result)


// In Async... We have to pass callback function also...
// Bcz we can not store file content in a variable using async function
// fs.readFile("./test.txt","utf-8",(err, result) => {
//     if(err){
//         console.log("Error",err)
//     }else{
//         console.log(result);
//     }
// });





// fs.writeFileSync it is overwrite the value means del old content and add new content
// If we want to append the new value after old value in our text file 
// fs.appendFileSync("./test.txt",`Hello Sandy\n`)



// For creating copy of a text file
// fs.cpSync('./test.txt', './copy.txt')



// For deleting files
// fs.unlinkSync("./copy.txt")




// For getting statistics of a file
// console.log(fs.statSync("./test.txt"))



// For creating folder
// fs.mkdirSync("./New")

// For creating nested folders
// fs.mkdirSync("./Neww/a/b",{recursive: true})


//Asynchronous is non-blocking & Synchronous is blocking operation