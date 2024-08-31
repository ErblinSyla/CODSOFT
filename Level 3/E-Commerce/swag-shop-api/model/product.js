var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: String,
    price: Number,
    imgUrl: String,
    description: String,
    category: String,
    likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', productSchema);
