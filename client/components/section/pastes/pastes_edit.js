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

  saveTitle(event) {
    event.preventDefault();

    Meteor.call('paste.saveTitle', this.props.params, this.refs.title.value, (err) => {
      if (err) {
        Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
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
            <div className="row">
             <input type="text" ref="title" placeholder="Type new title. . ." />
             <button onClick={this.saveTitle.bind(this)} className="btn btn-default">Save Title</button>
            </div>
          <CodeMirror className="col-xs-12"
            value={content}
            onChange={this.editContent.bind(this)}
            options={{ mode: 'markdown', lineNumbers: true }}/>
        </div>
        <PasteShare paste={this.props.paste} />
        <Link className="btn btn-default" to={viewPath}>View</Link>
      </div>
    );
  }
}

export default createContainer(({ params }) => {

  Meteor.subscribe('public.pastes');

  return { paste: Pastes.findOne(params.id)};

}, PasteEdit);
