// Load required packages
var mongoose = require('mongoose');

// Define our Season schema
var SeasonSchema = new mongoose.Schema({
    series_id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    startson: { type: String, required: true },
    endson: { type: String },
    createddate: { type: Date, default: Date.now },
    updateddate: { type: Date, default: Date.now }
});

// Export the Mongoose model
module.exports = mongoose.model('Season', SeasonSchema);
