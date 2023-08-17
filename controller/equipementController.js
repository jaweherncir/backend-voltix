const Equipement =require( '../models/equipementSchema');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "jaweher",
    api_key: "625584927476835",
    api_secret: "5TqNYtpwQkCJ_9wmSKGNobb8_x0"
  });
const createEquipment = async (req, res) => {

  try {
    const newEquipement = await Equipement.create(req.body);
    res.status(201).json(newEquipement);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create equipement' });
  }
  };
  


//delete batima
const DeleteEquipement=async(req,res)=>{
  try{
      const data=await Equipement.findOneAndRemove(
          {_id : req.params.id},
       
          )
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}

//getbatima byeid
const GetOneequipement=async(req,res)=>{
  try{
    const data=await Equipement.findOne({_id : req.params.id})
    
    res.status(201).json(data)
  }
  catch(error){
    console.log(error.message)
  }
}
//getAll
const GetAll=async(req,res)=>{
  try{
      const data=await Equipement.find()
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}

const getEquipementByIdBatima = async (req, res) => {
  const idBatima = req.params.idBatima;
  console.log(idBatima) // Assuming the idBatima is passed as a route parameter
  try{
    const data=await Equipement.find( { idBatima: idBatima })
    
    res.status(201).json(data)
  }
  catch(error){
    console.log(error.message)
  }

};


module.exports={createEquipment,DeleteEquipement,GetOneequipement,GetAll,
  getEquipementByIdBatima


}