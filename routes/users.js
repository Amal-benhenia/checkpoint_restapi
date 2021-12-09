const express=require('express')
const router=express.Router()
let Contacts=require('../models/user')
//CRUD
//testing
//url:http://localhost:5000/api/users/test
router.get(('/test'),(req,res)=>{
    res.send('it is working')
})

//creating new contact
//url:http://localhost:5000/api/users/add
router.post("/add", async (req, res) => {
    const { name, email} = req.body;
  
    try {
      const newContact = new Contacts({ name, email });
      const contact = await newContact.save();
      res
        .status(200)
        .json({ msg: ` ${name} has been added to your contacts`, contact });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  //returning all contacts
  //url:http://localhost:5000/api/users/allcontacts
  router.get("/allcontacts", async (req, res) => {
    try {
      const contacts = await Contacts.find();
      res.status(200).json({ contacts });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
//updating a contact
//url:http://localhost:5000/api/users/edit/:id
router.put("/edit/:id", async (req, res) => {
    const ID= req.params.id; 
    try {
      const contact = await Contacts.findByIdAndUpdate( ID, { $set: req.body }); 
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
  //deleting a contact
  //url:http://localhost:5000/api/user/delete/:id
  router.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    try {
      const contact = await Contacts.findByIdAndDelete(ID);
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
  
  
module.exports=router;