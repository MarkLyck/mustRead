import Docs from './collections/Docs'

let store = {
  docs: new Docs(),
  settings: {
    appKey: 'kid_BJ7Uz-ad',
    appSecret: '622901ccc59c4e3abfbf5ab83e719e74',
    basicAuth: btoa('kid_BJ7Uz:622901ccc59c4e3abfbf5ab83e719e74')
  }
}

store.docs.createDocs()
console.log('STORE', store);

export default store
