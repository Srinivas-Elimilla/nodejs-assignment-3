const fs = require('fs');
const http = require('http')

const createFile =async(filename,filecontent)=>{
    await fs.writeFile(filename,filecontent,(error)=>{console.log(error)})
}
createFile("index.html","<center><h1> Hello World </h1> \n <p><b>This is Srinivas Elimilla</b></p></center>");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-type": "text/html" });
        fs.readFile("index.html", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});
server.listen(3000,()=>{console.log('Server is setting up...')});

