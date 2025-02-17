const mongoose = require('mongoose')

const db = async()=>{
    try{
     await mongoose.connect('mongodb+srv://Taral:Taral92@cluster0.jcleq.mongodb.net',{})
     console.log('mogodb connection successfully');
     
     
    }
     
     catch(error){
     console.log('there is some error in db connection');
     

     }

}
module.exports=db