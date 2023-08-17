
const express=require('express');

const router=express.Router()

const {register,Login
}  =
 require( '../controller/clientController');
 router.post('/register',register)
 router.post('/login',Login)
module.exports=router

