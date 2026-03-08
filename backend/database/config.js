import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
const CONNECTION = process.env.CONNECTION
const mongoDB = async () => {
    try {
        await mongoose.connect(CONNECTION)
            .then(console.log("database is running"))
    }catch(error) {
        console.log(`error in the database config : ${error}`)
        process.exit(1)
    }
}
export default mongoDB