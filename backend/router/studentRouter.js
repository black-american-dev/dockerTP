import express from "express"
import { create, deleteStudent, index, indexById, putStudent } from "../controllers/studentsController.js"
import { auth } from "../middleware/authentification.js"



const studentRouter = express.Router()

studentRouter.get("/students" ,index)
studentRouter.post("/students", auth,create)
studentRouter.get("/students/:id", indexById)
studentRouter.put("/students/:id", auth,putStudent)
studentRouter.delete("/students/:id", auth,deleteStudent)


export default studentRouter