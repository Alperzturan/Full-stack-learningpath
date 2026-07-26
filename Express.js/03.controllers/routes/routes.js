import express from "express"
import {allStudents, newStudent, updateStudent, deleteStudent} from "../controllers/controllers.js"

const router = express.Router()

router.get("/all", allStudents)//get olmayanlar şu anda çalışmıyor
router.post("/new", newStudent)
router.put("/update", updateStudent)
router.delete("/delete", deleteStudent)

export default router