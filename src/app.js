import express from "express"

const app = express()
app.use(express.json())

app.get("/sumit",(req,res)=>{
    res.send("sumit is here")
})
 
export {app}