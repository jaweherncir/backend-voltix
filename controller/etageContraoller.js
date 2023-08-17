const Etage =require( '../models/etageSchema');


//step1
const createetage=async(req,res)=>{
  try {
 

    //create new user
    const et = new Etage({
        activiter: req.body.activiter,
        surface: req.body.surface,
        nombrepersonnel:req.body.nombrepersonnel,
        idBatima:req.body.idBatima,
 
    });

    //save user and respond
    const etage = await et.save();
    res.status(200).json(etage);
  } catch (err) {
    res.status(500).json(err)
  }
}
//step2
const updateEtage=async(req,res)=>{
  try{
      const data=await Etage.findOneAndUpdate(
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
const DeleteEtage=async(req,res)=>{
  try{
      const data=await Etage.findOneAndRemove(
          {_id : req.params.id},
       
          )
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}

//getbatima byeid
const GetOneEtage=async(req,res)=>{
  try{
    const data=await Etage.findOne({_id : req.params.id})
    
    res.status(201).json(data)
  }
  catch(error){
    console.log(error.message)
  }
}
//getAll
const GetAll=async(req,res)=>{
  try{
      const data=await Etage.find()
      
      res.status(201).json(data)
    }
    catch(error){
      console.log(error.message)
    }
}
const getEtageByIdBatima = async (req, res) => {
  const idBatima = req.params.idBatima;
  console.log(idBatima) // Assuming the idBatima is passed as a route parameter
  try {
    const data = await Etage.find({ idBatima: idBatima }); // Construct an object as the filter

    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};


module.exports={createetage,updateEtage,DeleteEtage,GetOneEtage,GetAll,getEtageByIdBatima


}