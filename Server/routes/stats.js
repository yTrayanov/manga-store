const express = require('express')
const Manga = require('../models/Manga');
const User = require('../models/User');

const router = new express.Router()

router.get('/', (req, res) => {
  Manga.find({}).then((manga) => {
    User.find({}).then((users) => {
      return res.status(200).json({
        manga: manga.length,
        users: users.length
      })
    })
  })
})

module.exports = router
