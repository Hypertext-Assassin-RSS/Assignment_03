const express = require('express')
const Post = require('../models/post.model')
const router = express.Router();

const app = express();

app.use(express.json())

router.post('/:id',async (req, res) => {
    const post = new Post({
        userId: req.params.id,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body
    })
    try {
        const response = await post.save();
        res.json({message: 'Post success', response: response})
    } catch (e) {
        res.send('Error :' + e)
    }
})



module.exports = router