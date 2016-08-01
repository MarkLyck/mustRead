import Docs from './collections/Docs'
import Session from './models/Session'

let store = {
  session: new Session(),
  docs: new Docs(),
  settings: {
    appKey: 'kid_BJ7Uz-ad',
    appSecret: '622901ccc59c4e3abfbf5ab83e719e74',
    basicAuth: btoa('kid_BJ7Uz-ad:622901ccc59c4e3abfbf5ab83e719e74')
  }
}

export default store
