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

router.get('/:id',async (req, res) => {
    let allPosts = [];
    try {
        const posts = await Post.find()
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].userId === req.params.id){
                allPosts[i] = posts[i]
            }
        }
        if (allPosts.length !== 0){
            res.json(allPosts)
            console.log(allPosts)
        }else {
            res.send('You have no post to show')
        }

    }catch (e) {
        res.send('Error :' + e)
    }
})



module.exports = router