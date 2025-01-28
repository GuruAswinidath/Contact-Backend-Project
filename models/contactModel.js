const mongoose=require("mongoose");

const contactScheme=mongoose.Schema({
    name:{
        type: String,
        require: [true,"Please add the contact name"],
    },
    email:{
        type: String,
        require: [true,"Please add the email"],
    },
    phone:{
        type:String,
        require: [true,"Please add the phone"],
    },
},{
    timestamps:true,
});

module.exports=mongoose.model("Contact",contactScheme);