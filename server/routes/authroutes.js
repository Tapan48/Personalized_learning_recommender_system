const express=require("express");
const { handleusersignup, handleuserlogin,verifytoken} = require("../controllers/user");


const router=express.Router();


router.post("/signup",handleusersignup)


router.post("/login",handleuserlogin)

router.get("/verifyToken",verifytoken)



module.exports=router



