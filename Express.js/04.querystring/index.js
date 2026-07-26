import express from "express"
import products from "./products.js"

const app = express()
const PORT = 5003

app.get("/", (req, res)=>{
    res.send(products)
})

app.listen(PORT, console.log("server is open"))