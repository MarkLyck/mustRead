import React from 'react'

import store from '../store'

import Modal from './Modal'


const Signup = React.createClass({
  signup: function() {
    console.log('this: ', this);
    let username = this.refs.username.value
    let password = this.refs.password.value
    store.session.signup(username, password)
  },
  render: function() {
    return (
      <Modal>
        <input type="text" placeholder="Username" ref="username"/>
        <input type="password" placeholder="Password" ref="password"/>
        <button onClick={this.signup} id="submit-btn">Signup</button>
      </Modal>
    )
  }
})

export default Signup
