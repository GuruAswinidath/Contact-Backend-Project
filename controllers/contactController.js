const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel");
const mongoose = require('mongoose');


//@description get all contacts
//@route get api/contacts
//@access public
const getcontacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@description get the contact by id
//@route get api/contacts/:id
//@access public
const getcontactbyid = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@description delete the contact by id
//@route DELETE /api/contacts/:id
//@access public
const deletecontact = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error("Invalid ID format");
    }

    // Find and delete the contact
    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json({ 
        message: `Contact with ID ${id} deleted successfully`, 
        deletedContact: contact 
    });
});


//@description update the contact by id
//@route update api/contacts/:id
//@access public
const updatecontact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedcontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedcontact);
});

//@description adding the contacts
//@route post api/contacts
//@access public
const addcontact = asyncHandler(async(req, res) => {
    console.log("The request body is:", req.body);
    const{name,email,phone}=req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All field are required");
    }
    const contact=await Contact.create({
        name,email,phone
    });
    res.status(201).json(contact);
});

// Export the functions
module.exports = {
    getcontactbyid,
    deletecontact,
    updatecontact,
    getcontacts,
    addcontact
};
