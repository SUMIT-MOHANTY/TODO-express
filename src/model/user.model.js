import mongoose from "mongoose";
const userSchema =new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"User name is required"],
            unique:true,
        },
        email:{
            type:String,
            required:[true,"Email is  required"],
            unique:true,
            lowercase:true,
            trim:true
        },
        password:{
            type:String,
            reqiured:[true,"password is required"],
        },
        profilepic:{
            type:String,
        },
        refreshToken:{
            type:String,
        },
    },
    {
        timestamps:true
    }
);
const User = mongoose.model("User",userSchema)

export{
    User
}