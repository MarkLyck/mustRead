import React from 'react'

const DocModal = React.createClass({
  render: function() {
    return (
      <div id="doc-modal-container">
        <div id="doc-modal">
          {this.props.children}
          <button onClick={this.props.closeDoc}>Mark as read</button>
        </div>
      </div>
    )
  }
})

export default DocModal
