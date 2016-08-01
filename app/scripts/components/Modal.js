import React from 'react'

const Modal = React.createClass({
  render: function() {
    return (
      <div className="modal-container">
        <div className="modal">
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default Modal
