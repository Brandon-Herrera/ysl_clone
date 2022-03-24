const mongoose = require('mongoose');
const {Schema} = mongoose;

const CategorySchema = new Schema({
    name: String,
    ancestors: [String],
    level: Number,
    url: {
        type: String,
        default: null,
    },
    listedProdIds: {
        type: [String],
        default: null,
    },
});

module.exports = mongoose.model('Category', CategorySchema);