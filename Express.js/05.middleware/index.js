import express from "express"
import middleware from "./middleware/middleware.js"

const app = express()
const PORT = 5003

app.get("/", middleware, (req, res, next)=>{
    console.log("a");
    next()
})
app.get("/", middleware, (req, res)=>{
    console.log(PORT);
    
    res.send(PORT)
})

app.listen(PORT, console.log("server is open"))