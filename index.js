const express = require("express");
const app = express();
const Connect = require('./src/db/db')


const Route  = require("./src/controller/todoconstroller")
app.use(express.json())
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
    //__dirname : It will resolve to your project folder.
  });

app.use("/get",Route);
app.use("/post",Route);


app.listen(1234,(req,res)=>{
    Connect()
    console.log("running on port 1234")
})