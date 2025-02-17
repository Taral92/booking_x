const express= require('express')
const router = require('../routes/router');
const ticket = require('../models/schema');
const nodemailer = require('nodemailer')


const booking = async (req,res)=>{

const {movie ,slots,seats}= req.body;

  try {

    const userticket = new ticket({movie,slots,seats})
    await userticket.save();
    const x= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'lexxyzz999@gmail.com',
            pass:'rsqj btju nkxk dklw'
        }
    })
    const mailoption= {
        from:'lexxyzz999@gmail.com',
        to:'parthiv601@gmail.com',
        subject:'testing',
        text:`${JSON.stringify(userticket)}`
    }
    await x.sendMail(mailoption,(err,info)=>{
        if(err) return res.json({message:'error in sending mail'})
            res.json({message:'emailed succesfully'})

    })
    
  } catch (error) {
      res.json({message:"something went wrong in booking"})
  }

   
}
const getticket = async(req,res)=>{
   const {id}= req.params;
   try {
      const tickets= await ticket.findById(id)
      if(!tickets) return res.json({messgae:'ur id is wrong'})
        res.json({tickets})
   } catch (error) {
    res.json({message:'error while getting ticket'})
   }


}

module.exports= {booking,getticket}