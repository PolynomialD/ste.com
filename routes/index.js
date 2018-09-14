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
  postRepository.create(req.body)
  res.send(202)
  res.render('pages/new', { title: '| new post' })
})

router.get('/view/:postKey', (req, res) => {
  const key = req.params.postKey
  const post = postRepository.get(key)

  if(post === undefined) {
    res.status(404)
    res.render('error')
  } else {
    console.log(post)
    res.render('pages/view', { title: `| ${post.title}`, post })
  }
})

module.exports = router
