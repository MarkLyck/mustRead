import React from 'react'

const ConfirmModal = React.createClass({
  confirmRead: function() {
    console.log(this.props.doc);
    // this.props.doc
  },
  render: function() {
    return (
      <div>
        <h3>Are you sure you read this?</h3>
        <button onClick={this.confirmRead} id="confirm-read">Confirm</button>
        <button onClick={this.props.closeConfirmation} id="cancel-read">Cancel</button>
      </div>
    )
  }
})

export default ConfirmModal
