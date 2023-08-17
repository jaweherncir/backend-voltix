const express=require('express');
const { createEquipment,DeleteEquipement,GetOneequipement,GetAll,getEquipementByIdBatima
}  =
 require( '../controller/equipementController');

 const multer = require('multer');
 const router=express.Router()
 const upload = multer({ dest: 'uploads/' });
//step1
router.post('/addequipement', upload.single('photo'),createEquipment)



//get all
router.get('/',GetAll)
router.get('/:idBatima',getEquipementByIdBatima)
//dellete  one
router.delete('/:id',DeleteEquipement)
router.get('/unequipement/:id',GetOneequipement)



module.exports=router