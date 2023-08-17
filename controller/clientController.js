const Client =require( '../models/clientSchema');
const bcrypt = require("bcrypt")
const register = async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const client = new Client({
       
    password: hashedPassword,
  
    email:req.body.email,
    username:req.body.username
        
      });
  
      // Save equipment and respond
      const savedClient = await client.save();
      res.status(200).json(savedClient);
    } catch (err) {
      res.status(500).json(err);
    }
  };
const Login= async (req, res) => {
    try {
      const user = await Client.findOne({ email: req.body.email });
      
      if (!user) {
        return res.status(404).json("email invalid");
      }
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      if (!validPassword) {
        return res.status(400).json("Wrong password");
      }
  
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }



module.exports={register,Login


}