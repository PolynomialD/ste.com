const express = require('express')
const router = express.Router()
const postRepository = require('../src/postRepository')

/* GET home page. */
router.get('/', (req, res) => {
  const posts = postRepository.getRecent(req.query.posts)
  res.render('pages/index', { title: '| home', posts })
})

router.get('/new', (req, res) => {
  res.render('pages/new', { title: '| new post' })
})

router.post('/new', (req, res) => {
  postRepository.save(req.body)
  res.sendStatus(202)
})

module.exports = router
