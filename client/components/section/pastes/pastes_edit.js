'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { createContainer } from'meteor/react-meteor-data';
import { Pastes } from '../../../../imports/collections/pastes';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
import PasteShare from './pastes_share';


class PasteEdit extends Component {

  editContent(content) {
    Meteor.call('paste.edit', this.props.params, content, (err) => {
      if (err) {
        Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
      }
    });
  }

  onPasteSave(event) {
    event.preventDefault();
    if (this.refs.desc.value !== '' && this.refs.title.value !== '') {
      Meteor.call('paste.saveEdit', this.props.params, this.refs.title.value, this.refs.desc.value, (err) => {
        if (err) {
          Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
        }
        Bert.alert('Paste Edited', 'success', 'fixed-top', 'fa-smile-o');
        this.refs.title.value = '';
        this.refs.desc.value = '';
      });
    } else {
      Bert.alert('Make sure to fill in all fileds.', 'danger', 'fixed-top', 'fa-frown-o');
    }
  }

  render() {
    const { content, title, desc } = this.props.paste ? this.props.paste : '';
    return(
      <div className="row pasteedit-wrapper">
        <div>
          <h5>Title: {title}</h5>
          <p>Description: {desc}</p>
          <CodeMirror
            id="codemirror"
            className="col l8 s12 m12"
            value={content}
            onChange={this.editContent.bind(this)}
            options={{ mode: 'markdown', lineNumbers: true,
            lineWrapping: true}}/>

         <div className="col l4 s12 m6 form">
            <h5>Edit This Paste</h5>
           <form>
             <label>Title: </label>
             <input className="form-control" type="text" ref="title" placeholder="Type new title. . ." />
             <label>Description: </label>
             <textarea className="form-control" ref="desc" placeholder="Type new description . . "></textarea>
             <button onClick={this.onPasteSave.bind(this)} className="btn btn-default btn-block">Save Changes</button>
           </form>
         </div>

         <PasteShare paste={this.props.paste} />

        </div>
      </div>
    );
  }
}

export default createContainer(({ params }) => {

  Meteor.subscribe('public.pastes');

  return { paste: Pastes.findOne(params.id)};

}, PasteEdit);
