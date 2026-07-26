import express from "express"
import router from "./routes/routes.js"

const app = express()
const PORT = 5003

app.use("/students", router )

app.listen(PORT, console.log("server is open"))