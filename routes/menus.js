const express = require('express');
const router = express.Router();
const Menu = require('../modules/Menu');

//ROUTES
router.get('/', async (req,res) => {
    try{
        const posts = await Menu.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/:date', async (req,res) => {
    try{
        const menu = await Menu.findOne({date:req.params.date});
        res.json(menu);
    }catch(err){
        res.json({message:err});
    }
});

router.delete('/:date', async (req,res) => {
    try{
        const removedPost = await Menu.deleteOne({date:req.params.date});
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
});

router.patch('/:date', async (req,res) => {
    try{
        const updatedPost = await Menu.updateOne(
            { date:req.params.date},
            { $set: {date: req.body.date, food: req.body.food}}            
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
});

router.post('/', async (req, res) => {
    const menu = new Menu({
        date: req.body.date,
        food: req.body.food
    });

    menu.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});

module.exports = router;