const mongoose = require('mongoose');
const User = require('../models/user');
const todoSchema = mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: User },

    title: { type: String, required: true, min: 5, max: 20, indexed: true },

    status: { type: String, default: 'to-do' },

    tags: { type: String, max: 10 },

    timeStamp: true

})
const Todo = mongoose.model('todo', todoSchema);
module.exports = Todo;