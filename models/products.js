// Load required packages
var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: {type: String},
    img: {type: String},
    type: {type: String},
    color:{type: String},
    price: {type: String},
    quantity: {type: String}  
 

});

module.exports = mongoose.model('Product', productSchema);

