require('dotenv').config()
const monggose = require("mongoose");

const Connect = ()=>{
    return monggose.connect(`mongodb+srv://1212:${process.env.PASS}@cluster0.kmsja.mongodb.net/todolist`)
}

module.exports  = Connect