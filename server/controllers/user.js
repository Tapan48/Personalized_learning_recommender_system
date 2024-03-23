
const User=require('../models/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "tapan-secret";


  
async function handleusersignup(req, res) {
  console.log("signup controller running");
  console.log(req.body);
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    res.status(400).json({
      error: "all fields are required",
    });
  }

  if (password !== confirmPassword) {
    res.status(400).json({
      error: "Password and confirm password do not match",
    });
  }
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ status: "okk user signed up" });
  } catch (err) {
    console.error("Error signing up user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function handleuserlogin(req, res) {

  console.log("login controller running")
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  try {
    if (!user) {
      res.json({ error: "User not found" });
    }
       

    if (await bcrypt.compare(password, user.password)) {  
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "15d",
      });    
      console.log("token:",token)
         // Send token as a <cookie></cookie>
    //      res.cookie('token', token,{


         
    // httpOnly: true, // prevents client-side access
    // sameSite:'none',
    // secure:false
    //      });
      
    res.render("home");

      // return res.status(201).json({
      //   status: "ok user login successful",
      //   data: token,  
      // });


    } else {
      res.json({ status: "error", error: "Invalid password" });
    }
  } catch (err) {
    console.error("error logging in user:", err);

    res.status(500).json({
      error: "Internal server error",
    });
}
}





async function verifytoken(req, res) {

  console.log("verify token controller running", req)

  // console.log(req.headers['Authorization'])
  // Extract the token from the Authorization header
  const authHeader = req.header['Authorization'];

  console.log(">>>>>>>token",authHeader)
//  console.log(res)
  if (!authHeader || !authHeader.startsWith('Bearer')) {

    // console.log("autheader not found")    
    // If token is not provided, return 401 Unauthorized
    return res.status(401).json({ message: 'Unauthorized' });   
  }   

  const token = authHeader.split(' ')[1];
  // console.log(token);

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    // If verification succeeds, send a success response
    return res.status(200).json({ message: 'Token verified' });
  } catch (error) {
    // If verification fails (token expired, invalid, etc.), return 401 Unauthorized
    // console.error('Error verifying token:', error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
}


module.exports={


    handleuserlogin,
    handleusersignup,
    verifytoken
}