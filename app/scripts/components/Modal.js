import React from 'react'

const Modal = React.createClass({
  render: function() {
    return (
      <div className="modal-container" style={this.props.containerStyles}>
        <div className="modal" style={this.props.modalStyles}>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default Modal
