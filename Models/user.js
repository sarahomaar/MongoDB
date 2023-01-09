const mongoose = require('mongoose');
const userSchema=mongoose.Schema({
    username: {type:String, required: true,unique },
    password : { type:String, required: true},
    firstName:{ String,required, minlength : 3, maxlength :15 },
    age:{ Number, min:13 }

})
const User = mongoose.model('user',userSchema);
module.exports=User;