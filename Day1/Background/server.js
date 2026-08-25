import mode_controller from "./controller/mode"
const express=require("express")

const app=express()
app.get('/',(req,res)=>{
    res.json({
        "message":"This is main route"
    })
})
app.use("/mode",mode_controller)
app.addListener(8000,()=>{
    console.log("Server Stared")
})