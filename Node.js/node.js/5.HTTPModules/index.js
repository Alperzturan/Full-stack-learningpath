import http from "http"

const PORT = 5003
const server = http.createServer((req, res)=>{
    console.log(req);
    res.write("<h1>hello world</h1>")
})

server.listen(PORT, console.log("server is up"))