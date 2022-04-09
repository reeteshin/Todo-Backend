const todoModel = require("../model/todoModel");
 

const express = require("express");
const Route = express.Router();



Route.get("/",async(req,res)=>
{
    var data = await todoModel.find().lean().exec()
    res.send(data);
})
Route.post("/",async(req,res)=>{
    try{
    var data =await todoModel.create(req.body);
    res.send(data)
    console.log("done")
    }
    catch(e)
    {
        res.send(e)
        console.log("error",e);
    }
    
})

module.exports =Route;