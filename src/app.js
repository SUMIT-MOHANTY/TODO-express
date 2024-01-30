import express from "express"

const app = express()

app.get("/sumit",(req,res)=>{
    res.send("sumit is here")
})
 
export {app}