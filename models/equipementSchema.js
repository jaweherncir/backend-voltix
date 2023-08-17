const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');
const EquipementSchema = new Schema({
    idBatima:ObjectId,
   Etage:{  type: mongoose.Schema.Types.ObjectId, ref: "etage",},
    normination:String,
    photo:{
      
        type:String,
        default:''
     },
    nombre:Number,
    puissance:Number,
    variationPuisance:String,
    Assegne:String,
    HeureDebuit:String,
    HeureFin:String,
    equipement:  [{
        equipement: {type:String,  default:''},
  
      
    }],
    alimentation:  [{
        alimentation: {type:String,  default:''},
  
      
    }],
    
 
}, {timestamps: true})




module.exports = mongoose.model('equipement', EquipementSchema)





