import React from 'react'

const ConfirmModal = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Are you sure you read this?</h3>
        <button onClick={this.props.confirmRead} id="confirm-read">Confirm</button>
        <button onClick={this.props.cancelConfirmation} id="cancel-read">Cancel</button>
      </div>
    )
  }
})

export default ConfirmModal
