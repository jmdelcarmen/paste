'use strict';

import React, { Component } from 'react';
import { createContainer } from'meteor/react-meteor-data';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
import { Pastes } from '../../../../imports/collections/pastes';

class PasteEdit extends Component {

  render() {
      console.log(this.props.paste);
      const { content } = this.props.paste ? this.props.paste : '';
      // console.log(this.props.params.id);
    return(
      <div className="row">
        <div className="col s6">Paste Editor
        <CodeMirror value={content} options={{ mode: 'markdown', lineNumbers: true}} />
        </div>
        <div className="col s6">Paste Rendered</div>
      </div>
    );
  }
}

export default createContainer(({ params }) => {

  Meteor.subscribe('public.pastes');

  return { paste: Pastes.findOne({_id: params.id })};

}, PasteEdit);
