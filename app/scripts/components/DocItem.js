import React from 'react'

const DocItem = React.createClass({
  render: function() {
    return (
      <li id="doc-item" onClick={this.props.openDoc.bind(null, this.props.doc)}>
        <h3>{this.props.doc.title}</h3>
        <p>read</p>
      </li>
    )
  }
})

export default DocItem
