import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './components/App'
import ListModal from './components/ListModal'
import DocModal from './components/DocModal'

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ListModal}/>
      <Route path=":docName" component={DocModal}/>
    </Route>
  </Router>
)

export default router
