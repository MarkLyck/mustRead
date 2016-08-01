import React from 'react'

const App = React.createClass({
  render: function() {
    return (
      <div id="app">
        Hi from app
        {this.props.children}
      </div>
    )
  }
})

export default App
