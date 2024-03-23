const express = require("express");
const path = require("path");
const app = express();
const port = 3003;

const User = require('./models/user');
const authroutes=require('./routes/authroutes')
const homeroute=require("./routes/homeroute")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const cors = require("cors");



app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: true,
     
    })
  );
  
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));


app.use(cookieParser());  
const corsOptions={ 

  origin:'http://localhost:3000',
  credentials:true, 
  optionsSuccessStatus:200,
}
app.use(cors(corsOptions)); 


app.use(function(req,res,next){
res.header('Access-Control-Allow-Origin','http://localhost:3000');

res.header("Access-Control-Allow-Headers",true);

res.header("Access-Control-Allow-Credentials",true);
res.header("Access-Control-Allow-Methods",'GET,POST,OPTIONS,PUT,PATCH,DELETE');


next();



})







// Define a route



app.use("/home",homeroute)
app.use("/auth",authroutes)  





const conStr = 'mongodb://localhost:27017/Major_project';


mongoose.                            
connect(conStr,

)  
.then(() => {
    console.log('connected to Mongodb')
    app.listen(3004, ()=> {
        console.log(`Node API app is running on port 3004`)
    });
}).catch((error) => {
    console.log(error)
})
