// Load required packages
var mongoose = require('mongoose');

// Define our Comments schema
var CommentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comicId: { type: String, required: true },
    comment: { type: String, required: true },
    createddate: { type: Date, default: Date.now },
    updatedate: { type: Date, default: Date.now }
});


// Export the Mongoose model
module.exports = mongoose.model('Comment', CommentSchema);
