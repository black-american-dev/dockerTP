import mongoose from "mongoose"

const UsersShema = new mongoose.Schema({
    id : {
        type : Number,
        required : true,
        unique : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique :true
    },
    password : {
        type : String,
        required : true
    }
},{
    collection : "users"
})

const Users = mongoose.model("Users", UsersShema)

export default Users
