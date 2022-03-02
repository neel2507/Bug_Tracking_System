const mongoose = require("mongoose")

//sechema
let RoleSchema = new mongoose.Schema({
   roleName:{
       type:String
   }
})

//model
let RoleModel = mongoose.model("role",RoleSchema)
module.exports = RoleModel
