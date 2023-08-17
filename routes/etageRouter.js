const express=require('express');
const { createetage,updateEtage,DeleteEtage,GetOneEtage,GetAll,getEtageByIdBatima
}  =
 require( '../controller/etageContraoller');

 const router=express.Router()
//step1
router.post('/addetage',createetage)
//step2
router.put('/:id',updateEtage)


//get all
router.get('/',GetAll)
router.get('/etageparbatima/:idBatima',getEtageByIdBatima)
//dellete  one
router.delete('/:id',DeleteEtage)
router.get('/unetage/:id',GetOneEtage)



module.exports=router
 