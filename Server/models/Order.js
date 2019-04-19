const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    address:{type:mongoose.Schema.Types.String, required},
    addictionalInfo:{type:mongoose.Schema.Types.String},
    manga:{type:mongoose.Schema.Types.ObjectId, ref:'Manga'},
})

const Order = mongoose.model('Model',orderSchema);

module.exports = Order;