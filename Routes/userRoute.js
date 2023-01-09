const express= require('express');
const route= express.Router();
const userController= require('../controllers/userController')

route.get('/',async function(req,res)
{
    let data=await userController.getUser();
    res.send(data);
})
route.post('/register', async function(req,res){
    let data = await userController.Register(req.body)
    res.send("User was registerd succcessfully")
})

route.post('/login',async function(req,res){
    let data= await userController.LogIn(req.body)
    if(data.length==0){
        res.status(401).send('Error: Invalid Credentials')
    }else{
        res.send("Logged in successfully")
    }
})



route.get('/firstName', async function(req,res){
    let data = await userController.getFirstName()
    res.send(data)
})

route.delete('/:id', async function(req,res){
    let data= await userController.deleteUser(req.params.id)
    res.send("User deleted")
})

route.patch('/:id', async function(req,res){
    let data= await userController.updateUser(req.params.id,req.body)
    res.send(" User was edited successfully")
})

module.exports= route