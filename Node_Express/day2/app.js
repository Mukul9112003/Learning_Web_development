const { error } = require("console");
const fs=require("fs");
const { Server } = require("http");
const { nextTick } = require("process");
const { getSystemErrorMap } = require("util");
fs.readFile("student.txt","utf8",(err,data)=>{
    if(err){
        console.log("Error");
    }
    console.log(data);
    fs.appendFile("student.txt","\nGoal: Backend Developer",(err)=>{
        if(err){
            console.log("Error")
        }
        console.log("append done ")
    })
});
