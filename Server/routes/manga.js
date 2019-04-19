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
  });

  router.get('/details/:id', (req, res) => {
    const id = req.params.id
    Manga.findById(id)
      .then((manga) => {
        if (!manga) {
          return res.status(404).json({
            success: false,
            message: 'Entry does not exists!'
          })
        }
  
        let response = {
          id,
          title: manga.title,
          description: manga.description,
          price: manga.price,
          author: manga.author,
          image:manga.image
        }
  
  
        res.status(200).json(response)
      })
  });
  

module.exports = router;
