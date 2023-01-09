const express= require('express')
const route= express.Router();
const User = require('../models/user');
const todoController= require('../controllers/todoController')

route.get('/',async function(req,res)
{
    let data=await todoController.getTodos();
    res.send(data);
})

route.post('/newtodo', async function(req,res){
    let newTodo= await todoController.createTodo(req.body)
    res.send(`Todo: ${newTodo} added successfully`)
})

route.get('/:userId', async function(req,res){
    let data= await todoController.getTodoById(req.params.userId)
    res.send(data)
})

route.patch('/:id', async function(req,res){
    let data=await todoController.updateTodo(req.params.id,req.body)
    res.send("Todo updated successfully")
})

route.delete('/:id', async function(req,res){
    let data= await todoController.deleteTodo(req.params.id)
    res.send("Todo deleted successfully")
})

module.exports=route