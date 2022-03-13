const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-contoller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const statusController = require("./controller/status-controller")
const priorityController = require("./controller/priority-controller")
const projectController = require("./controller/project-controller")
const projectTeamController = require("./controller/projectTeam-controller")
const taskUserController = require("./controller/taskUser-controller")
const moduleController = require("./controller/module-controller")
const taskController = require("./controller/task-controller")
const bugController = require("./controller/bug-controller")

const cors  = require("cors")
const app = express()

//middle ware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost:27017/BugTracking',function(err){
    if(err){
        console.log("Connection not Established");
        console.log(err);
    }
    else{
        console.log("Database Connected");
    }
})
app.get("/",function(req,res){
    res.write("Welcome.....")
    res.end()
})
/*app.get("/login")
app.listen(3000,function(){
    console.log("server started on 3000");
})
app.get("/login",function(req,res){
    res.write("Login...")
    res.end()
})
app.get("/signup",function(req,res){
    res.write("Signup...")
    res.end()
})*/
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)
app.post("/sendOTP",sessionController.sendOTP)

//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRoles)
app.put("/roles",roleController.updateRole)
app.get("/roles/:roleId",roleController.getRoleById)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUser)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.get("/users/:userId",userController.getUserById)
//user-login
app.post("/login",userController.login)

//status
app.post("/status",statusController.addStatus)
app.get("/status",statusController.getAllStatus)
app.delete("/status/:statusId",statusController.deleteStatus)
app.put("/status",statusController.updateStatus)

//priority
app.post("/priority",priorityController.addPriority)
app.get("/priority",priorityController.getAllPriority)
app.delete("/priority/:priorityId",priorityController.deletePriority)
app.put("/priority",priorityController.updatePriority)

//project
app.post("/projects",projectController.addProject)
app.get("/projects",projectController.getAllProject)
app.delete("/projects/:projectId",projectController.deleteProject)
app.put("/projects",projectController.updateproject)

//projectTeam
app.post("/projectTeam",projectTeamController.addProjectTeamMember)
app.get("/projectTeam",projectTeamController.getAllProjectMember)
app.delete("/projectTeam/:projectTeamId",projectTeamController.deleteProjectTeamMember)

//module
app.post("/modules",moduleController.addModule)
app.get("/modules",moduleController.getAllmodule)
app.delete("/modules",moduleController.deleteModule)
app.put("/modules",moduleController.updateModule)

//task
app.post("/tasks",taskController.addTask)
app.get("/tasks",taskController.getAllTask)
app.delete("/tasks",taskController.deleteTask)
app.put("/taks",taskController.updateTask)

//taskUser
app.post("/taskusers",taskUserController.addTaskUser)
app.get("/taskusers",taskUserController.getAllTaskUser)
app.delete("/taskusers/:taskUser",taskUserController.deleteTaskUser)

//bug
app.post("/bugs",bugController.addBug)
app.get("/bugs",bugController.getAllBug)
app.delete("/bugs",bugController.deleteBug)
app.put("/bugs",bugController.updateBug)

//server
app.listen(3000,function(){
    console.log("server started on 3000");
})