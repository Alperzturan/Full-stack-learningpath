import http from "http"
import fs from "fs"
import { error } from "console"

const PORT = 5003
const server = http.createServer((req, res)=>{
    if (req.url === "/") {
        res.writeHead(200)
        fs.readFile("./public/home.html", (error, data)=>{
            if (error) throw error
            res.end(data)
    })}else if(req.url === "/about"){
        res.writeHead(200)
        fs.readFile("./public/about.html", (error, data)=>{
            if (error) throw error
            res.end(data)
    })
    }
    
})

server.listen(PORT, console.log("server is up"))