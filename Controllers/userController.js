const User = require("../Models/user");
async function getUser(){
    let data= await User.find()
    return data
}

async function Register(data){
    let res= await User.create(data)
    return res
}

async function LogIn(data){
    let res= await User.find(data)
    return res
}

async function getFirstName(){
    let res= await User.find({"firstName":1})
    return res
}

async function updateUser(id,data){
    let updated= await User.updateOne({_id:id},data)
    return updated
}

async function deleteUser(id){
    let deleted= await User.deleteOne({_id:id})
    return deleted
}

module.exports={getUser,LogIn,Register,updateUser,deleteUser,getFirstName}
