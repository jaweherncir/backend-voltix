const Batiment =require( '../models/batimentSchema');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "jaweher",
    api_key: "625584927476835",
    api_secret: "5TqNYtpwQkCJ_9wmSKGNobb8_x0"
  });
  var path = require('path');

//step1
const createBatiment=async(req,res)=>{
  try {
 

    //create new user
    const bat = new Batiment({
      nom: req.body.nom,
      userId:req.body.userId
 
 
    });

    //save user and respond
    const batima = await bat.save();
    res.status(200).json(batima);
  } catch (err) {
    res.status(500).json(err)
  }
}
//step2
const step2=async(req,res)=>{
  try{
      const data=await Batiment.findOneAndUpdate(
          {_id : req.params.id},
          req.body,
          {new:true}
          )
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}
//step3
const step3=async(req,res)=>{
  try{
      const data=await Batiment.findOneAndUpdate(
          {_id : req.params.id},
          req.body,
          {new:true}
          )
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}
//step4
const step4=async(req,res)=>{
  try{
      const data=await Batiment.findOneAndUpdate(
          {_id : req.params.id},
          req.body,
          {new:true}
          )
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}
//step5
const step5=async(req,res)=>{
  try{
      const data=await Batiment.findOneAndUpdate(
          {_id : req.params.id},
          req.body,
          {new:true}
          )
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}
//step6
const step6=async(req,res)=>{
  try{
      const data=await Batiment.findOneAndUpdate(
          {_id : req.params.id},
          req.body,
          {new:true}
          )
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}
//delete batima
const DeleteBatima=async(req,res)=>{
  try{
      const data=await Batiment.findOneAndRemove(
          {_id : req.params.id},
       
          )
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}
//add update armoir
const UpdateBatima = async (req, res) => {
  const { armoirId } = req.params;

  try {
    // Find the existing Armoir instance
    const existingArmoir = await Batiment.findByIdAndUpdate( {_id : req.params.id},
      req.body,
      {new:true});
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
//getbatima byeid
const GetOneBatima=async(req,res)=>{
  try{
    const data=await Batiment.findOne({_id : req.params.id})
    
    res.status(201).json(data)
  }
  catch(error){
    console.log(error.message)
  }
}
//getAll
const GetAll=async(req,res)=>{
  try{
      const data=await Batiment.find()
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}
//step2
const updatebat=async(req,res)=>{
  try{
      const data=await Batiment.findOneAndUpdate(
          {_id : req.params.id},
          req.body,
          {new:true}
          )
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}





//getbatima byeid client
const batimatuser=async(req,res)=>{
  const userId = req.params.userId;

  console.log(userId) // Assuming the idBatima is passed as a route parameter
  try {
    const data = await Batiment.find({ userId: userId }); // Construct an object as the filter

    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
}


module.exports={createBatiment,step2,step3,step4,step5,step6,GetAll,
  DeleteBatima,GetOneBatima,UpdateBatima,updatebat,batimatuser


}