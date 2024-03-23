


async function checkauth(req,res,next){


const token=req.cookies?.token

if (!token) return res.redirect("login")


    
}