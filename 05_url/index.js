const http = require("http")
const fs = require("fs")
const url = require('url')



const myServer = http.createServer((req,res) => {
    if(req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()}: ${req.url} New Req Received\n`;

    // const myUrl = url.parse(req.url)       
    // req.url gives the whole path which is requested by client
    // url.parse distribute the url paths nd qp 

    const myUrl = url.parse(req.url, true) //If we pass true now it also distribute query parameters as an object  
    console.log(myUrl)

    fs.appendFile("./log.txt",log, (err,data) => {
        // switch(req.url){
        // myUrl distriburtes the path name from whole url so we can directly use myUrl.pathname
        switch(myUrl.pathname){
            case '/': res.end("HomePage");
            break
            case '/about': 
            // now we retrive the username which is passed in qp
            const username = myUrl.query.name;
            res.end(`Hi, ${username}`)
            break
            default: res.end("404")
        }
        
    })
    // res.end("Hello from server");
});

myServer.listen(8000, () => console.log("server started"));