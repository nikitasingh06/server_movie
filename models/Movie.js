// Load required packages
var mongoose = require('mongoose');

// Define our Comments schema
var MovieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    createddate: { type: Date, default: Date.now }
});


// Export the Mongoose model
module.exports = mongoose.model('Movie', MovieSchema);
