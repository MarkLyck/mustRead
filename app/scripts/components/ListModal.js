import $ from 'jquery'
import React from 'react'
import ReactHtmlParser from 'react-html-parser';

import store from '../store'

import DocItem from './DocItem'
import Modal from './Modal'
import DocModal from './DocModal'

const ListModal = React.createClass({
  getInitialState: function() {
    return {docs: store.docs.toJSON(), showDoc: false, docToShow: ''}
  },
  scroll: function() {
    console.log('hi');
  },
  componentDidMount: function() {
    store.docs.on('update', () => {
      this.setState({docs: store.docs.toJSON()})
    })
    store.docs.fetch()
  },
  openDoc: function(doc) {
    this.setState({showDoc: true, docToShow: doc})
  },
  closeDoc: function() {
    this.setState({showDoc: false})
  },
  scrolledToBottomOnDoc: function(docId) {
    console.log('SCROLLED TO BOTTOM OF: ', docId);
    let scrolledToBottoms = store.session.get('scrolledToBottom')
    scrolledToBottoms.push(docId)
    store.session.set('scrolledToBottom', scrolledToBottoms)
  },
  render: function() {
    let docList = this.state.docs.map((doc,i) => {
      return (<DocItem
        doc={doc}
        openDoc={this.openDoc}
        key={i}/>)
    })
    let docModal;
    if (this.state.showDoc) {
      let unParsedHTML = this.state.docToShow.body
      let parsedHTML = ReactHtmlParser(unParsedHTML)
      let docModalStyles = {
        height: '80%',
        width: '80%',
        overflowY: 'scroll',
        overflowX: 'hidden'
      }
      docModal = (
        <Modal onScroll={this.scroll} modalStyles={docModalStyles} onEndReached={this.scrolledToBottomOnDoc} docId={this.state.docToShow._id}>
          <DocModal closeDoc={this.closeDoc} doc={this.state.docToShow}>
            {parsedHTML}
          </DocModal>
        </Modal>
      )
    }
    return (
      <div className="modal-container">
        <div className="modal">
          <ul id="doc-list">
            {docList}
          </ul>
        </div>
        {docModal}
      </div>
    )
  }
})

export default ListModal
