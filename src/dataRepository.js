const fs = require('fs')

const dataRepository = {
  getPath (filename) {
    return `data/${filename}.json`
  },

  loadFile (filename) {
    const path = this.getPath(filename)
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  },

  add (filename, key, obj) {
    let file = this.loadFile(filename)
    let data = file[key] || []

    data.push(obj)
    file[key] = data

    const path = this.getPath(filename)
    this.writeFile(path, file)
  },

  writeFile (path, data) {
    const jsonData = JSON.stringify(data)
    fs.writeFile(path, jsonData, (err) => {
      if(err) {
        return console.log(err);
      }
      console.log(`${path} was saved!`);
    })
  }
}

module.exports = dataRepository
