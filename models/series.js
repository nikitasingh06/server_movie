// Load required packages
var mongoose = require('mongoose');

// Define our Series schema
var SeriesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdby: { type: String, required: true },
    createddate: { type: Date, default: Date.now },
    updatedate: { type: Date, default: Date.now }
});

// Export the Mongoose model
module.exports = mongoose.model('Series', SeriesSchema);
