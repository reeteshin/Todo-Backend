require('dotenv').config()
const monggose = require("mongoose");

const Connect = ()=>{
    return monggose.connect(`mongodb+srv://1212:1212@cluster0.kmsja.mongodb.net/todolist`)
}

module.exports  = Connect