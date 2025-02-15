const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
},{timestamps: true});




// Now we create model
// the name 'user' is become my collection name 
const User = mongoose.model('user', userSchema);



module.exports = User;