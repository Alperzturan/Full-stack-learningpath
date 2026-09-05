import express from "express"
import connectDB from "./DB/connectDB.js"
import "dotenv/config"
import { readSingleData, createMultipleDoc, createDoc, updateData, deleteData } from "./Schemas/Movies.js"

const app = express()
const PORT = process.env.port || 5003
const DATABASE_URL = process.env.database_url || "mongodb://127.0.0.1:27017/movies"

connectDB(DATABASE_URL)
deleteData("dsrr");

app.listen(PORT, console.log("server is open"))