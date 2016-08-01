import React from 'react'
import Modal from './Modal'

const Login = React.createClass({
  login: function() {
    console.log('this: ', this);
    let username = this.refs.username.value
    let password = this.refs.password.value
    store.session.login(username, password)
  },
  render: function() {
    return (
      <Modal>
        <input type="text" placeholder="Username" ref="username"/>
        <input type="password" placeholder="Password" ref="password"/>
        <button onClick={this.login} id="submit-btn">Submit</button>
      </Modal>
    )
  }
})

export default Login
