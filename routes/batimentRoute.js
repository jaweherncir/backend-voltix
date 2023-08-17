const express=require('express');
const { createBatiment ,step2,step3,step4,step5,step6,GetAll,DeleteBatima,
    GetOneBatima,UpdateBatima,updatebat,batimatuser
}  =
 require( '../controller/batimentController');
 const multer = require('multer');
 const router=express.Router()
 const upload = multer({ dest: 'uploads/' });

//step1
router.post('/addBat',createBatiment)
//step2
router.put('/baitmat/:id',step2)
//step3
router.put('/baitmat/:id',step3)
//step4
router.put('/baitmat/:id',step4)
//step5
router.put('/baitmat/:id',step5)
//step6
router.put('/baitmat/:id',step6)
//step7
router.put('/upload/:id', upload.single('photo'), UpdateBatima);

//get  all batimat
router.get('/',GetAll)
//dellete  one
router.delete('/:id',DeleteBatima)
//get  one batimat
router.get('/batimaone/:id',GetOneBatima)
router.put('/:id',updatebat)
//get batimant of user
router.get('/batimauser/:userId',batimatuser)

module.exports=router
 