import backbone from 'backbone'


import data from '../data'
import Doc from '../models/Doc'



const Docs = backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/kid_BJ7Uz-ad/docs/`,
  model: Doc,
  createDocs: function() {
    data.forEach((doc) => {
      this.create({
        title: doc.title,
        body: doc.body
      })
    })
  },
  getDocs: function() {
    this.fetch()
  }
})

export default Docs
