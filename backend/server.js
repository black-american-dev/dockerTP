import express from "express"
import dotenv from "dotenv"
import studentRouter from "./router/studentRouter.js"
import mongoDB from "./database/config.js"
import userRouter from "./router/usersRouter.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(cors({
    origin: ["http://localhost:5173", "http://34.175.22.39:5173", "https://docker-tp.vercel.app/"],
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
mongoDB()

app.use("/api", studentRouter)
app.use("/api/users", userRouter)

try {
    app.listen(PORT, ()=> {
        console.log(`server is running on the port : ${PORT}`);
    })
}catch(error) {
    console.log("Error in the server");
}