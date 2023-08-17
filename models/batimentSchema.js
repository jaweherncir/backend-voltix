const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BatimentSchema = new Schema({
userId:ObjectId,
    surface:{
        type: String,
        default:"",
      
    },
    activiter:{
        type: String,
        default:"",
      
    },
    nom:String,
    pays : {
        type: String,
        default:"",
      
    },
    anneeConstruction:  {
        type: String,
        default:"",
      
    },
    jourFrquence:  {
        type: [String],
        default: [],
      
    },
    heurDebuit: {
        type: String,
        default:"",
      
    },
    heurFin: {
        type: String,
        default:"",
      
    },
    nbrPersonnel: {
        type: String,
        default:"",
      
    }, 
    PresebceGTBTGTC: {
        type: String,
        default:"",
      
    },
    nbretage: {
        type: String,
        default:"",
      
    },
    photo:{
      
        type:String,
        default:"",
     },
}, {timestamps: true})




module.exports = mongoose.model('batimat', BatimentSchema)





