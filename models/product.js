const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    index: Number,
    urlSearched: String,
    id: String,
    name: String,
    price: String,
    color: String,
    brand: String,
    subCategory: String,
    category: String,
    topCategory: String,
    productCategory: String,
    macroCategory: String,
    microCategory: String,
    superMicroCategory: String,
    stock: String,
    isNewCollection: {
        type: String,
        enum: [null, true],
        default: null,
    },
    isWinter21: {
        type: String,
        enum: [null, true],
        default: null,
    },
    isLeVestiaire: {
        type: String,
        enum: [null, true],
        default: null,
    },
    isGift: {
        type: String,
        enum: [null, true],
        default: null,
    },
    isLifestyle: {
        type: String,
        enum: [null, true],
        default: null,
    },
    imgUrl: [String],
    details: [String],
    sizes: [String],
});

ProductSchema.index({name: 1, type: -1});

module.exports = mongoose.model('Product', ProductSchema);