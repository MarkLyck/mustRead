import React from 'react'
import $ from 'jquery'

import store from '../store'
import Modal from './Modal'
import ConfirmModal from './confirmationModal'

const DocModal = React.createClass({
  getInitialState: function() {
    if (store.session.get('read').indexOf(this.props.doc.id) === -1) {
      return {showModal: false, confirmed: false}
    } else {
      return {showModal: false, confirmed: true}
    }

  },
  showModal: function() {
    if (store.session.get('read').indexOf(this.props.doc._id) === -1) {
      this.setState({showModal: true})
    } else {
      throw new Error('You have already marked this document as read.')
    }
  },
  cancelConfirmation: function() {
    this.setState({showModal: false, confirmed: false})
  },
  confirmRead: function() {
    let seenDocuments = store.session.get('scrolledToBottom')
    console.log("seen Documents: ", seenDocuments);
    if (seenDocuments.indexOf(this.props.doc._id) !== -1) {
      let documentsRead = store.session.get('read')
      documentsRead.push(this.props.doc.id)
      store.session.set('read', documentsRead)
      store.session.updateUser()
      this.setState({showModal: false, confirmed: true})
    }
  },
  componentDidMount: function() {
    console.log(this.props.doc.id);
    store.session.on('change', () => {
      console.log('SESSION CHANGED');
    })
    console.log('COMPONENT DID MOUNT');
  },
  componentWillUnmount: function() {
    store.session.off()
  },
  render: function() {
    let confirmationModal;

    if (this.state.showModal) {
      confirmationModal = (
        <Modal closeModal={this.cancelConfirmation}>
          <ConfirmModal confirmRead={this.confirmRead} cancelConfirmation={this.cancelConfirmation} doc={this.props.doc}/>
        </Modal>
      )
    }



    let checkBox = (<input
      onChange={this.showModal}
      id="doc-checkbox"
      type="checkbox"
      ref="doc-checkbox"
      checked={this.state.confirmed}
      disabled={this.state.confirmed}/>)

    return (
      <div id="document-modal" ref="documentModal">
        <button onClick={this.props.closeDoc}>X</button>
        {this.props.children}
        <label htmlFor="doc-checkbox" onChange={this.showModal}>
          Mark as read
          {checkBox}
        </label>
        {confirmationModal}
      </div>
    )
  }
})

export default DocModal
