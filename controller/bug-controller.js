const BugModel = require("../model/bug-model")


//add [ POST ]
module.exports.addBug = function (req, res) {

    let bugName = req.body.bugName
    let description = req.body.description
    let developerId = req.body.developerId
    let testerId = req.body.testerId
    let priorityId = req.body.priorityId
    let taskId= req.body.taskId
    let statusId = 1

    let bug = new bugModel({
        bugName: bugName,
        description: description,
        developerId: developerId,
        testerId: testerId,
        priorityId :priorityId,
        taskId:taskId,
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
module.exports.getAllbug = function (req, res) {

    bugModel.find().populate("priority").populate("project").populate("user").populate("task").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somthing went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "bug ret...", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deletebug = function(req,res){
    //params userid 
    let bugId = req.params.bugId //postman -> userid 

    bugModel.deleteOne({_id:bugId},function (err, data) {
        if (err) {
            res.json({ msg: "Somthing went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "delete...", data: data, status: 200 })//http status code 
        }
    })
}


//update 
module.exports.updatebug= function(req,res){
    //params userid 
    let bugId = req.body.bugId //postman -> userid 
    let bugName = req.body.bugName
    let description=req.body.description
    BugModel.updateOne({_id:bugId},{bugName:bugName},{description:description},function (err, data) {
        if (err) {
            res.json({ msg: "Somthing went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "bug update...", data: data, status: 200 })//http status code 
        }
    })
}