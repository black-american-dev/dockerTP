import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY
export const auth = (req,res,next) => {
    const token = req.cookies.token
    console.log(SECRET_KEY);
    console.log(token);
    
    if (!token) {
        return res.status(401).json({message : "missing token"})
    }
    try{
        jwt.verify(token,SECRET_KEY,(error)=> {
            if(error) {
                return res.status(401).json({message : "token is invalid"})
            }
            next()
        })
    }catch(error) {
        console.log(`error in the try catch in the middleware : ${error}`)
    }
    
}