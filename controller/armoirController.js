const armoir =require( '../models/armoirSchema');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "jaweher",
    api_key: "625584927476835",
    api_secret: "5TqNYtpwQkCJ_9wmSKGNobb8_x0"
  });
//add armoir
const imageArmoir = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
  // Create new equipment
  const armoire = new armoir({
   
    photo: result.secure_url ,
    idBatima:req.body.idBatima,
    
  });

  // Save equipment and respond
  const savedarmoir = await armoire.save();
  res.status(200).json(savedarmoir);
} catch (err) {
  res.status(500).json(err);
}
};



//add update armoir
const updateArmoir = async (req, res) => {
    const { armoirId } = req.params;
  
    try {
      // Find the existing Armoir instance
      const existingArmoir = await armoir.findById(armoirId);
      if (!existingArmoir) {
        return res.status(404).json({ error: 'Armoir not found' });
      }
  
      // Upload the new image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
  
      // Update the Armoir instance with the new photo URL
      existingArmoir.photo = result.secure_url;
      await existingArmoir.save();
  
      res.json(existingArmoir);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  //delete batima
const DeleteArmoir=async(req,res)=>{
    try{
        const data=await armoir.findOneAndRemove(
            {_id : req.params.id},
         
            )
        
        res.status(201).json(data)
      }
      catch(error){
        console.log(error.message)
      }
  }
  //getAll
const GetAll=async(req,res)=>{
    try{
        const data=await armoir.find()
        
        res.status(201).json(data)
      }
      catch(error){
        console.log(error.message)
      }
  }
   //get armoir byeid batima
const GetOnearmoir=async(req,res)=>{
    try{
      const data=await armoir.findOne({_id : req.params.id})
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
  }


  const getArmoirByIdBatima = async (req, res) => {
    const idBatima = req.params.idBatima;
    console.log(idBatima) // Assuming the idBatima is passed as a route parameter
    try{
      const data=await armoir.find( { idBatima: idBatima })
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
  
  };
  
module.exports={
    imageArmoir,
    updateArmoir,
    DeleteArmoir,GetAll,
    GetOnearmoir,getArmoirByIdBatima
  
  } 