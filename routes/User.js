const express = require('express')
const User = require('../models/user.model')
const router = express.Router();

const  app = express();

app.use(express.json())

router.get('/',  async function (req, res) {
    try {
        const users = await  User.find();
        res.json({message:'Get All User Success',result:users})
    }catch (e) {
        res.send('Error :'+e)
    }
})

router.post('/',  async function (req, res) {
    const user = new User({
        userId: req.body.userId,
        firstName: req.body.firstName,
        surname: req.body.surname,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    })
    try {
        const response = await user.save();
        res.json({message:'User '+req.body.userId+' account created',response:response})
    }catch (e) {
        res.send('Error :'+e)
    }
})

module.exports = router