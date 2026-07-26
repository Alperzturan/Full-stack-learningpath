import express from "express";

const route = express.Router()

route.get("/a", (req, res)=>{
    res.send("get");
})
route.post("/b", (req, res)=>{
    res.send("post");
})
route.put("/c", (req, res)=>{
    res.send("put");
})
route.delete("/d", (req, res)=>{
    res.send("delete");
})

export default route