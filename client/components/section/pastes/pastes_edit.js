'use strict';

import React, { Component } from 'react';
import { createContainer } from'meteor/react-meteor-data';
import { Pastes } from '../../../../imports/collections/pastes';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';


class PasteEdit extends Component {

  editContent(content) {
    Meteor.call('paste.edit', this.props.params, content, (err) => {
      console.log(this.props.params.id);
    });
  }

  render() {
      // console.log(this.props.paste);
      const { content } = this.props.paste ? this.props.paste : '';
      // console.log(this.props.params.id);
    return(
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={content}
          onChange={this.editContent.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }}/>
      </div>
    );
  }
}

export default createContainer(({ params }) => {

  Meteor.subscribe('public.pastes');

  return { paste: Pastes.findOne({_id: params.id })};

}, PasteEdit);
