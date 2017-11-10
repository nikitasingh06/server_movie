// Load required packages
var mongoose = require('mongoose');

// Define our category Schema
var CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    createddate: { type: Date, default: Date.now },
    updateddate: { type: Date, default: Date.now }
});

// Export the Mongoose model
module.exports = mongoose.model('Category', CategorySchema);
