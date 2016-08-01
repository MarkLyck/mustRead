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
    this.setState({showModal: true})
  },
  cancelConfirmation: function() {
    this.setState({showModal: false, confirmed: false})
  },
  confirmRead: function() {
    let seenDocuments = store.session.get('scrolledToBottom')
    if (seenDocuments.indexOf(this.props.doc._id) !== -1) {
      let documentsRead = store.session.get('read')
      documentsRead.push(this.props.doc._id)
      store.session.set('read', documentsRead)
      store.session.updateUser()
      this.setState({showModal: false, confirmed: true})
    }
  },
  render: function() {

    let confirmationModal;
    if (this.state.showModal) {
      confirmationModal = (
        <Modal closeModal={this.cancelConfirmation}>
          <ConfirmModal
          confirmRead={this.confirmRead}
          cancelConfirmation={this.cancelConfirmation}
          doc={this.props.doc}/>
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
        <button id="close-button" onClick={this.props.closeDoc}><i className="fa fa-times" aria-hidden="true"></i></button>
        <h2 id="doc-title">{this.props.doc.title}</h2>
        {this.props.children}
        <label className="mark-as-read" htmlFor="doc-checkbox" onChange={this.showModal}>
          <p>Mark as read</p>
          {checkBox}
        </label>
        {confirmationModal}
      </div>
    )
  }
})

export default DocModal
