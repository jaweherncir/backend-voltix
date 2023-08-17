const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');
const armoirSchema = new Schema({

    idBatima:ObjectId,
    photo:{
      
       type:String
    },

}, {timestamps: true})


 
 
module.exports = mongoose.model('armoir', armoirSchema)





