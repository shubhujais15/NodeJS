const http = require("http");

// For creating server
// For processing incoming req we pass callback func
// callback func hav two arg onr req and other response
// req have the details of client like ki kis user ne req kiya hai uski ip address ky h and so on
// const myServer = http.createServer((req,res) => {
//     console.log("New Req Received");
//     console.log(req);
//     res.end("Hello from server");
// });

// myServer.listen(8000, () => console.log("server started"));




// const fs = require("fs")
// const myServer = http.createServer((req,res) => {
//     const log = `${Date.now()}: New Req Received\n`;
//     fs.appendFile("./log.txt",log, (err,data) => {
//         res.end("Hello From server again")
//     })
//     res.end("Hello from server");
// });

// myServer.listen(8000, () => console.log("server started"));







const fs = require("fs")
const myServer = http.createServer((req,res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("./log.txt",log, (err,data) => {
        switch(req.url){
            case '/': res.end("HomePage");
            break
            case '/about': res.end("About Page")
            break
            default: res.end("404")
        }
        
    })
    // res.end("Hello from server");
});

myServer.listen(8000, () => console.log("server started"));