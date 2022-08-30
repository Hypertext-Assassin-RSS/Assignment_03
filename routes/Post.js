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

router.put('/:id',async (req, res) => {
    try {
       const post = await Post.findById(req.params.id)
            post.userId = post.userId
            post.date = req.body.date
            post.time = req.body.time
            post.title = req.body.title
            post.body = req.body.body

        const response = await  post.save();
        res.json({message: 'Post  updated', response: response})
    }catch (e) {
        res.send('Error :' + e)
    }
})

router.delete('/:id',async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const response = post.remove();
        res.json({message: 'Post  deleted'})
    }catch (e) {
        res.send('Error :' + e)
    }
})


router.get('/',async (req, res) => {
    try {
        const posts = await Post.find();
        res.json({message: 'All posts ',result:posts})
    }catch (e) {
        res.send('Error :' + e)
    }
})



module.exports = router