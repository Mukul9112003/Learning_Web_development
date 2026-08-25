const express=require("express")
const patients=express.Router()
patients.get("/",(req,res)=>{
    res.json({"message":"Patient route"})
});
module.exports = patients;