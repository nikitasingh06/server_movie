// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
   // bill: { type: String, required: true },
   //code: { type: String, required: true },
    userType: { type: Number, required: true },    
    cartId : { type : String }
    
})

module.exports = mongoose.model('User', UserSchema);
