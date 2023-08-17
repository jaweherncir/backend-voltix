const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EtageSchema = new Schema({
    idBatima:ObjectId,
    activiter:String,
    surface:String,
    nombrepersonnel:Number
 
}, {timestamps: true})




module.exports = mongoose.model('etage', EtageSchema)





