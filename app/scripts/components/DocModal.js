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
    if (store.session.get('read').indexOf(this.props.doc.id) === -1) {
      this.setState({showModal: true})
    } else {
      throw new Error('You have already marked this document as read.')
    }
  },
  cancelConfirmation: function() {
    this.setState({showModal: false, confirmed: false})
  },
  confirmRead: function() {
    let documentsRead = store.session.get('read')
    documentsRead.push(this.props.doc.id)
    store.session.set('read', documentsRead)
    store.session.updateUser()
    this.setState({showModal: false, confirmed: true})
  },
  componentDidMount: function() {
    console.log(this.props.doc.id);
    store.session.on('change', () => {
      console.log('SESSION CHANGED');
    })
    console.log('COMPONENT DID MOUNT');
    // $(this.refs.documentModal).bind('scroll',chk_scroll);
    // function chk_scroll(e) {
    //   console.log(e);
    //     var elem = $(e.currentTarget);
    //     if (elem[0].scrollHeight - elem.scrollTop() == elem.outerHeight())
    //     {
    //       console.log("bottom");
    //     }
    //
    // }



    console.log($('#document-modal'));
    $('#document-modal').bind('scroll', function() {
      if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
      {
        alert('end reached');
      }
    })

    document.getElementById('document-modal').onscroll = function() {
      console.log('scroll');
      if(!document.body.scrollTop){
          alert('top');
      }
    }

    $(this.refs.documentModal).scroll(function() {
      console.log('SCROLL!!!!');
    })

    $('#document-modal').off('scroll').on('scroll', function(){
     console.log("scrolled!");
    });
  },
  componentWillUnmount: function() {
    store.session.off()
  },
  render: function() {
    let confirmationModal;
    if (this.state.showModal) {
      confirmationModal = (
        <Modal>
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
