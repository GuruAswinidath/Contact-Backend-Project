const express=require("express");
const router=express.Router();

//Read all contacts
// router.route("/").get((req,res)=>{
//     res.status(200).json({message:"Get all Contacts"});
// });

// //Create
// router.route("/").post((req,res)=>{
//     res.status(200).json({message:"Create the Contacts"});
// });

// //Update
// router.route("/:id").put((req,res)=>{
//     res.status(200).json({message:`Update the Contact for ${req.params.id}`});
// });

// //Delete
// router.route("/:id").delete((req,res)=>{
//     res.status(200).json({message:`delete the Contact for ${req.params.id}`});
// });

// //Read the particular contact
// router.route("/:id").get((req,res)=>{
//     res.status(200).json({message:`Get the Contact for ${req.params.id}`});
// });

const{getcontactbyid,deletecontact,updatecontact,getcontacts,addcontact}=require('../controllers/contactController');

router.route("/").get(getcontacts).post(addcontact);

router.route("/:id").get(getcontactbyid).delete(deletecontact).put(updatecontact);

module.exports=router;