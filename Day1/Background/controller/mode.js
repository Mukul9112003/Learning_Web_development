const express=require("express")
const mode=express.Router()
mode.get("/",(req,res)=>{
    res.json({
        "message":dark
    })
})
module.exports=mode;