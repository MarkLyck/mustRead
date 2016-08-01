import React from 'react'

import store from '../store'

import DocItem from './DocItem'
import DocModal from './DocModal'

const ListModal = React.createClass({
  getInitialState: function() {
    return {docs: store.docs.toJSON(), showDoc: false, docToShow: ''}
  },
  componentDidMount: function() {
    store.docs.on('change', () => {
      this.setState({docs: store.docs.toJSON()})
    })
  },
  openDoc: function(doc) {
    console.log('open: ', doc);
    this.setState({showDoc: true, docToShow: doc.body})
  },
  closeDoc: function() {
    this.setState({showDoc: false})
  },
  render: function() {
    console.log(this.state);
    let docList = this.state.docs.map((doc,i) => {
      return (<DocItem
        doc={doc}
        openDoc={this.openDoc}
        key={i}/>)
    })
    let docModal;
    if (this.state.showDoc) {
      docModal = (
        <DocModal closeDoc={this.closeDoc}>
          {this.state.docToShow}
        </DocModal>
      )
    }
    return (
      <div id="list-modal-container">
        <div id="list-modal">
          <ul>
            {docList}
          </ul>
        </div>
        {docModal}
      </div>
    )
  }
})

export default ListModal
