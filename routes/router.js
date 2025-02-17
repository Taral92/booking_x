const express= require('express')
const ticket = require('../models/schema')
const router = express.Router();
const cors = require('cors');
const {booking,getticket} = require('../controllers/bookingcontroller');


router.post('/booking',booking)
router.get('/tickets/:id',getticket)

module.exports= router;