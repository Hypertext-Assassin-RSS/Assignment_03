const express =require('express')
const User = require('../models/user.model')
const router = express.Router();

const app = express();

router.get('/',async (req, res) => {
    try {
        const users = await User.find();
        for(const u of users){
            if (u.email === req.body.email && u.password === req.body.password){
                res.json({message:'User credentials match',response:true})
            }else {
                res.json({message:'email or password error',response:false})
            }
        }
    } catch (e) {
        res.send('Error :' + e)
    }
})

module.exports = router