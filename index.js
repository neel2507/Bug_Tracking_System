const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")

const app = express()
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/BugTracking',function(err){
  if(err){
    console.log("db connection fail .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls 

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles",roleController.addRole)
app.delete("/roles/:roleId",roleController.deleteRole)
app.get("/roles",roleController.getAllRoles)
app.put("/roles",roleController.updateRole)

//user 
app.post("/users",userController.addUser)
app.delete("/users/:userId",userController.deleteUser)
app.get("/users",userController.getAllUsers)
app.put("/users",userController.updateUser)




//server 

app.listen(3000,function(){
  console.log("server started on 3000");  
})