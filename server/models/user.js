const mongoose=require("mongoose");



const userschema=new mongoose.Schema({


    email:{


        required:true,
        type:String,
        unique:[true,'']
    },
            // mvc ---> model,view,controller
    password:{


        type:String,
        required:true,
        unique:true
    },

    // confirmpassword:{

    //     type:String,
    //     required:false,
    //     unique:true

    // }




})


module.exports=mongoose.model('User',userschema)  //creating a model of user