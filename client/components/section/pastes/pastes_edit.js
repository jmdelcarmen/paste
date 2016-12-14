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
        Materialize.toast(err.reason, 2000);
      }
    });
  }

  saveTitle(event) {
    event.preventDefault();

    Meteor.call('paste.saveTitle', this.props.params, this.refs.title.value, (err) => {
      if (err) {
        Materialize.toast(err.reason, 2000);
      }
      this.refs.title.value = '';
    });
  }

  render() {
      // console.log(this.props.paste);
      const { content, title } = this.props.paste ? this.props.paste : '';
      const viewPath = `/paste/view/${this.props.params.id}`;

    return(
      <div className="row">
        <div className="col-xs-11">
          <h5>Title: {title}</h5>
           <input type="text" ref="title" placeholder="Type new title. . ." /><button onClick={this.saveTitle.bind(this)} className="btn btn-default">Edit Title</button>
          <CodeMirror
            value={content}
            onChange={this.editContent.bind(this)}
            options={{ mode: 'markdown', lineNumbers: true }}/>
        </div>
        <Link className="button" to={viewPath}>View</Link>
        <PasteShare paste={this.props.paste} />
      </div>
    );
  }
}

export default createContainer(({ params }) => {

  Meteor.subscribe('public.pastes');

  return { paste: Pastes.findOne({_id: params.id })};

}, PasteEdit);
