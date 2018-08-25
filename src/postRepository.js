const _ = require('lodash')

const dataRepository = require('./dataRepository')

const postRepository = {
  getRecent (numberOfPosts = 10) {
    const posts = dataRepository.loadFile('posts')
    const keys = Object.keys(posts).slice(-numberOfPosts).reverse()
    const recentPosts = _.pick(posts, keys)
    return recentPosts
  },

  save (obj) {
    const timestamp = Date.now()
    obj.dateString = new Date(timestamp).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    dataRepository.add('posts', timestamp, obj)
  }
}

module.exports = postRepository
