const express=require('express');
const multer = require('multer');
const router=express.Router()
const upload = multer({ dest: 'uploads/' });
const {imageArmoir,updateArmoir,DeleteArmoir,GetAll,
    GetOnearmoir,getArmoirByIdBatima
}  =
 require( '../controller/armoirController');
 router.post('/upload', upload.single('photo'),imageArmoir)
 router.put('/upload/:armoirId', upload.single('photo'), updateArmoir);
//get  all batimat
router.get('/',GetAll)
//dellete  one
router.delete('/:id',DeleteArmoir)
//get  one batimat
router.get('/:id',GetOnearmoir)
router.get('/armoirbatima/:idBatima',getArmoirByIdBatima)
module.exports=router