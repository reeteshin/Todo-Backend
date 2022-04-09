const monggose = require("mongoose");


const todoSchema = new monggose.Schema({
    Title:{type:String,required:false},
    todo:{type:String,required:true}
})

const todoModel = monggose.model("To",todoSchema)
module.exports = todoModel;