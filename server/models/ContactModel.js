import mongoose from 'mongoose'

const ContactSchema = mongoose.Schema({
    name: {
        required: true,
    }, 
    email : {
        required: true,
    }
}, 
 {
    timestamps : true,
 });


 const ContactModel = mongoose.model('Contact', ContactSchema);


export default ContactModel;