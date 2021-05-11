const express = require('express');
const router = express.Router();
const Post = require('../modules/Post');

//ROUTES
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/:postId', async (req,res) => {
    try{
        const posts = await Post.findById(req.params.postId);
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/:title', async (req,res) => {
    try{
        const posts = await Post.findOne(() => {
            f => f.Post.title == req.params.title
        });
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.deleteOne({_id:req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
});

router.patch('/:postId', async (req,res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id:req.params.postId},
            { $set: {title: req.body.title, desc: req.body.desc}}            
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/s', async (req,res) => {
    
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        desc: req.body.desc
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});

module.exports = router;