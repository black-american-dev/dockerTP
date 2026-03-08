import Users from "../modules/usersModule.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import cookieParser from "cookie-parser"
//import dotenv from "dotenv"
//dotenv.config()

export const signup = async (req,res) => {
    const {username ,email ,password} = req.body
    if (!username || !email || !password) {
        return res.status(400).json({message : "data is invalid"})
    }
    const users = await Users.find()
    const isExists = users.find((u) => u.email == email)
    if (isExists) {
        return res.status(400).json({message : "user with this email already exists"})
    }
    const lastID = users.length <= 0 ? 0 : users[users.length-1].id+1
    const hashedPassword = await bcrypt.hash(password, 10)
    const savedUser = new Users({
        id : lastID,
        username,
        email,
        password : hashedPassword
    }).save()
    return res.status(201).json({message : "user added successfully ", savedUser})
}
export const login = async (req,res) => {
    const {email ,password} = req.body 
    if (!email || !password) {
        return res.status(400).json({message : "data is invalid"})
    }
    const user = await Users.findOne({email})
    if (!user) {
        return res.status(404).json({message : "no user found with this email"})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if (!isMatch) {
        return res.status(404).json({message : "wrong password"})
    }
    const token = jwt.sign({ id :user.id } ,process.env.SECRET_KEY ,{expiresIn:"1h"})
    res.cookie("token",token,{maxAge :3600000})
    return res.status(200).json({message : "user logged in successfully "})
}