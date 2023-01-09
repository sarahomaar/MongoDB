const Todo= require('../models/todo');
const User = require('../models/user');

async function getTodos(){
    let data= await Todo.find()
    return data
}

async function createTodo(data){
    let res= await Todo.create(data)
    return res
}

async function getTodoById(id){
    let res= await Todo.find({userId:id})
    return res
}

async function updateTodo(id,data){
    let res= await Todo.updateOne({_id:id},data)
    return res
}

async function deleteTodo(id){
    let res= await Todo.deleteOne({_id:id})
    return res
}

module.exports={getTodos,createTodo,getTodoById,updateTodo,deleteTodo}