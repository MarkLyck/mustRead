import React from 'react'


import Modal from './Modal'
import ConfirmModal from './confirmationModal'

const DocModal = React.createClass({
  getInitialState: function() {
    return {showModal: false}
  },
  showModal: function() {
    this.setState({showModal: true})
  },
  closeConfirmation: function() {
    this.setState({showModal: false})
  },
  render: function() {
    let confirmationModal;
    if (this.state.showModal) {
      confirmationModal = (
        <Modal>
          <ConfirmModal closeConfirmation={this.closeConfirmation} doc={this.props.doc}/>
        </Modal>
      )
    }
    return (
      <div>
        <button onClick={this.props.closeDoc}>X</button>
        {this.props.children}
        <button onClick={this.showModal}>Mark as read</button>
        {confirmationModal}
      </div>
    )
  }
})

export default DocModal
