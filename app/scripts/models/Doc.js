import Backbone from 'backbone'

const Doc = Backbone.Model.extend({
  urlroot: `https://baas.kinvey.com/appdata/kid_BJ7Uz-ad/docs/`,
  defaults: {
    title: '',
    body: '',
    read: false
  },
})

export default Doc
