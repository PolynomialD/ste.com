const _ = require('lodash')

const dataRepository = require('./dataRepository')

const postRepository = {
  getRecent (numberOfPosts = 10) {
    const posts = dataRepository.loadFile('posts')
    const keys = Object.keys(posts).slice(-numberOfPosts).reverse()
    const recentPosts = _.pick(posts, keys)
    return recentPosts
  },

  create (obj) {
    const timestamp = Date.now()
    const key = obj.title.toLowerCase().replace(/ /g, '-')
    obj.created = timestamp
    obj.dateString = new Date(timestamp).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    dataRepository.add('posts', key, obj)
  },

  get (postKey) {
    const posts = dataRepository.loadFile('posts')
    const post = posts[postKey]
    return post
  }

}

module.exports = postRepository
