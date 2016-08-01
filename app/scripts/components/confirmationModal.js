import React from 'react'

const ConfirmModal = React.createClass({
  render: function() {
    return (
      <div id="confirmation-modal">
        <h3>Are you sure you read this?</h3>
        <button onClick={this.props.confirmRead} id="confirm-read">Mark as Read</button>
        <button onClick={this.props.cancelConfirmation} id="cancel-read">or <span id="cancel-span">Cancel</span></button>
      </div>
    )
  }
})

export default ConfirmModal
