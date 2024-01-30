import mongoose from "mongoose";
import { User } from "./user.model";

const todoSchema = new mongoose.Schema({
    todoName:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:flase
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})

 const Todo = monngoose.model("Todo",todoSchema)
  
 export{
    Todo
 }