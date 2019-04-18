const express = require('express')
const authCheck = require('../middleware/auth-check');
const Manga = require('../models/Manga');

const router = new express.Router();

router.post('/create' ,(req,res) => {
    debugger;
     const manga = req.body;
     Manga.create(manga)
        .then(() => {
            res.status(200).json({
                success:true,
                message:'Manga added successfully',
                manga
            })
        })
});

router.get('/all' , (req, res) => {
    Manga.find()
    .then((manga) => {
      return res.status(200).json(manga)
    })
  })
  

module.exports = router;
