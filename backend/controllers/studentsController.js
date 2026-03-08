import Students from "../modules/studentsModule.js"


export const create = async (req,res) => {
    const {name,age,filiere,email,password} = req.body
    console.log(req.body);
    if (!req.body) {
        return res.status(400).json({message : "bad request"})
    }
    if (!name || !age || !filiere || !email || !password) {
        return res.status(400).json({message : "invalid data"})
    }
    const students = await Students.find()
    const isExists = students.find((s) => s.email == email)
    if (isExists) {
        return res.status(400).json({message : "student already exists"})
    }
    const lastID = students.length<= 0 ? 0 : students[students.length-1].id+1 
    const savedStudents = await new Students({
        id: lastID,
        name,
        age,
        filiere,
        email,
        password
    }).save()
    return res.status(201).json({message : "student added successfuly",savedStudents})
}
export const index = async (req,res) => {
    const students = await Students.find()
    if (!students) {
        return res.status(404).json({message : "no user found"})
    }
    res.status(200).json(students)
}
export const indexById = async (req,res) => {
    const {id} = req.params
    if (!id) {
        return res.status(400).json({message : "id is invalid"})
    }
    const parsedId = parseInt(id)
    const student = await Students.find({id : parsedId})
    if (student.length <= 0) {
        return res.status(404).json({message : "student not found "})
    }
    return res.status(200).json(student)
}
export const putStudent = async (req,res) => {
    const {id} = req.params
    if (!id) {
        return res.status(400).json({mesage : "id is invalid"})
    }
    const parsedId = parseInt(id)
    const {name,age,filiere,email,password} = req.body
    if (!name || !age || !filiere || !email || !password) {
        return res.status(400).json({message : "invalid data"})
    }
    const student = await Students.findOneAndUpdate({id : parsedId},{
        id : parsedId,
        name,
        age,
        filiere,
        email,
        password
    })
    if (!student) {
        return res.status(404).json({message : "student not found"})
    }
    return res.status(200).json({message : "student updated successfuly", student})
}
export const deleteStudent = async (req,res) => {
    const {id} = req.params
    if (!id) {
        return res.status(400).json({message : "id is invalid"})
    }
    const parsedId = parseInt(id)
    const student = await Students.findOneAndDelete({id : parsedId})
    if (!student) {
        return res.status(404).json({message : "student not found"})
    }
    return res.status(200).json({message : "student deleted successfuly "})
}