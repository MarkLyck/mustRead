import React from 'react'
import store from '../store'

const DocItem = React.createClass({
  render: function() {
    let icon = <i className="fa fa-check" aria-hidden="true"></i>
    // If they have already read it:
    if (store.session.get('read').indexOf(this.props.doc.id) !== -1) {
      icon = <i className="checked fa fa-check" aria-hidden="true"></i>
    }
    return (
      <li className="doc-item" onClick={this.props.openDoc.bind(null, this.props.doc)}>
        <h3>{this.props.doc.title}</h3>
        {icon}
      </li>
    )
  }
})

export default DocItem
