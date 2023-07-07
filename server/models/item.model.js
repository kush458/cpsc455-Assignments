const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const itemSchema = new Schema({
    name: String,
    price: Number,
    imageURL: String,
    description: String,
    createdAt: Date
});

const Item = model('Item', itemSchema);

module.exports = Item;