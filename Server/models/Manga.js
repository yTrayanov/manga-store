const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title:{type:mongoose.SchemaTypes.String , required:true},
    description:{type:mongoose.Schema.Types.String , required:true},
    price:{type:mongoose.Schema.Types.Number,required:true},
    author:{type:mongoose.Schema.Types.String , required:true},
    image:{type:mongoose.SchemaTypes , required:true},
    users:[{type:mongoose.Schema.Types.ObjectId , ref:'User'}],
});

const Manga = mongoose.model('Manga',itemSchema);

module.exports = Manga;