import express from "express"

const app = express()
const PORT = 5003

/* app.get("/student/class/:id", (req, res)=>{
    console.log(req.params.id);
})
app.get("/product/iphone/:model", (req, res)=>{
    console.log(req.params.model);
}) */

//param
app.param("id", (req, res, next, id)=>{
    console.log(id);
    next()
})
app.get("/user/:id", (req, res)=>{
    console.log("aesergpwdfsl");
    res.send("nice")
})

app.listen(PORT, console.log("server is open"))