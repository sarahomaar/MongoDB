const express = require('express')
const app = express()
const port = 7000
const todoRoute=require('./routes/todoRoute');
const userRoute=require('./routes/userRoute')
const mongoose= require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/lab3').then(()=>{
    console.log("connected to DB")
});

app.use(express.urlencoded({extended:true}));

app.use('/todo',todoRoute);
app.use('/user',userRoute);
// const movieRoute=require('./Routes/movieRoute');
// const userRoute=require('./Routes/UserRoute')
// const mongoose=require('mongoose');
// mongoose.set("strictQuery",false)
// mongoose.connect("mongodb://localhost:27017/ITI").then(()=>
// {
//     console.log('open connection to DB');
// })
// app.use(express.urlencoded({extended:true}));
// app.use('/user',userRoute);
// app.use('/todo',todoRoute);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
