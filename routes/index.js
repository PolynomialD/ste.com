const express = require('express')
const router = express.Router()
const dataRepository = require('../src/dataRepository')

/* GET home page. */
router.get('/', (req, res) => {
  const posts = dataRepository.loadFile('posts')
  
  res.render('pages/index', { title: ':home', posts })
})

router.get('/new', (req, res) => {
  res.render('pages/new', { title: ':new post' })
})

router.post('/new', (req, res) => {
  dataRepository.add('posts', Date.now(), req.body)
  res.sendStatus(202)
})

module.exports = router
