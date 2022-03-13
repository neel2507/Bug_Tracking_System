const mongoose = require("mongoose")


let ModuleSchema = new mongoose.Schema({
    
        moduleName:{
            type:String,
            required:true
        },
        description:{
            type:String
        },
        estimatedTime:{
            type:String
        },
        startDate:{
            type:String
        },
        priorityId : {
                type:mongoose.Schema.Types.ObjectId,
                ref:"priority"
        },
        projectId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:"project"
        },
        statusId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:"status"
}
})


const ModuleModel = mongoose.model("module",ModuleSchema)
module.exports = ModuleModel