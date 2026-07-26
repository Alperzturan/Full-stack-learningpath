import express from "express"
import cors from "cors"


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET", "POST", "PUT", "DELETE"],
    allowedHeaders:["ContentType", "Authorization"]
}))

app.get("/", (req, res)=>{
    console.log(`home page is open ${req.method}`);
    res.sendStatus(201)
})

app.listen(PORT, ()=>console.log(`Server has been opened on: ${PORT}`))