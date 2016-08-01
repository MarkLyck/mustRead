import React from 'react'
import $ from 'jquery'
import _ from 'underscore'

const Modal = React.createClass({
  closeModal: function(e) {
    if (_.toArray(e.target.classList).indexOf('modal-container') !== -1) {
      this.props.closeModal()
    }
  },
  scroll: function() {
    if($(this.refs.modal).scrollTop() + $(this.refs.modal).innerHeight() >= $(this.refs.modal)[0].scrollHeight -1)
    {
      this.props.onEndReached(this.props.docId)
    }
  },
  render: function() {
    return (
      <div onClick={this.closeModal}className="modal-container" style={this.props.containerStyles}>
        <div onScroll={this.scroll} className="modal" style={this.props.modalStyles} ref="modal">
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default Modal
