import http from "http"

const PORT = 5003
const server = http.createServer((req, res)=>{
    if (req.url === "/") {
        res.end("<h1>HOME</h1>")
    }else{
        res.end("<h1>404 PAGE NOT FOUND</h1>")
    }
    
})

server.listen(PORT, console.log("server is up"))