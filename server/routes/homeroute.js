const express=require("express");

const router=express.Router()



router.get("/homen",(req,res)=>{

return res.render("home")

})




module.exports=router