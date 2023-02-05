const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    // status:{
    //     type: Boolean,
    //     required: true
    // }
});

module.exports = mongoose.model('ToDo', todoSchema);