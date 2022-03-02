const TaskModel = require("../model/task-model")


//add [ POST ]
module.exports.addTask = function (req, res) {

    let taskName = req.body.taskName
    let description = req.body.description
    let totalTime = req.body.totalTime
    let startDate = req.body.startDate
    let moduleId = req.body.moduleId
    let projectId= req.body.projectId
    let statusId = 1

    let user = new taskModel({
        taskName: taskName,
        description: description,
        totalTime: totalTime,
        startDate: startDate,
        priorityId :priorityId,
        moduleId:moduleId,
        statusId:statusId
    })



    module.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAlltask = function (req, res) {

    taskModel.find().populate("priority").populate("module").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somthing went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "task ret...", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deletetask = function(req,res){
    //params userid 
    let taskId = req.params.taskId //postman -> userid 

    taskModel.deleteOne({_id:taskId},function (err, data) {
        if (err) {
            res.json({ msg: "Somthing went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "delete...", data: data, status: 200 })//http status code 
        }
    })
}


//update 
module.exports.updatetask = function(req,res){
    //params userid 
    let taskId = req.body.taskId //postman -> userid 
    let taskName = req.body.taskName
    let description=req.body.description
    TaskModel.updateOne({_id:taskId},{taskName:taskName},{description:description},function (err, data) {
        if (err) {
            res.json({ msg: "Somthing went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "task update...", data: data, status: 200 })//http status code 
        }
    })
}