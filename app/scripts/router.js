import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './components/App'
import ListModal from './components/ListModal'
import Login from './components/Login'
import Signup from './components/Signup'

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ListModal}/>
      <Route path="login" component={Login}/>
      <Route path="signup" component={Signup}/>
    </Route>
  </Router>
)

export default router
