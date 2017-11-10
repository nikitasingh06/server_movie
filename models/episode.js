// Load required packages
var mongoose = require('mongoose');

// Define our Comics Schema
var EpisodeSchema = new mongoose.Schema({
    series_id: { type: String, required: true },
    season_id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    story: { type: String, required: true },
    createddate: { type: Date, default: Date.now },
    updateddate: { type: Date, default: Date.now }
});

// Export the Mongoose model
module.exports = mongoose.model('Episode', EpisodeSchema);
