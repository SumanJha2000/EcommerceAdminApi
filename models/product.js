const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    quantity: {
        type: Number,
        default: 1,
    }
})

const product = mongoose.model('Product', Product);
module.exports = product;