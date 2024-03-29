const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("User", userSchema)