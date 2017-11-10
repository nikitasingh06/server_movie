var mongoose = require('mongoose');


var cartSchema = new mongoose.Schema({
        name: {type: String},
        img: {type: String},
        type: {type: String},
        color:{type: String},
        price: {type: String},
        quantity: {type: String}     

});

module.exports = mongoose.model('Cart', cartSchema);

