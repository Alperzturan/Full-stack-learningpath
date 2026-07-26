import express from "express"

const allStudents = (req, res)=>{
    res.send("allStudents")
}
const newStudent = (req, res)=>{
    res.send("newStudent")
}
const updateStudent = (req, res)=>{
    res.send("updateStudent")
}
const deleteStudent = (req, res)=>{
    res.send("deleteStudent")
}

export {allStudents, newStudent, updateStudent, deleteStudent}