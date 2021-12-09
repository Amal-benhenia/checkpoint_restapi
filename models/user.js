const mongoose=require('mongoose')
const schema=mongoose.Schema;
const contactSchema= new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    }
})
module.exports=Contacts=mongoose.model('contact',contactSchema)