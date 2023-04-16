const { log } = require('console');
const fs = require('fs');
const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const myServer= http.createServer((req,res)=>{

    const handleReadFile = (statusCode,fileLocation) => {
        fs.readFile(fileLocation,(err,data) => {
            res.writeHead(statusCode,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }

    if(req.url === "/raihan"){
        handleReadFile(200,'./raihan.html');
    }else if(req.url === '/'){
        handleReadFile(200,'./index.html');
    }else{
        handleReadFile(404,'./error.html');
    }

});
myServer.listen(port,host ,()=>{
    console.log(`Server is running at http://${host}:${port}`);
});