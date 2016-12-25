'use strict';

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({


  'paste.create': function() {
    return Pastes.insert({
      title: 'Paste',
      desc: 'Paste description',
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: Meteor.userId(),
      public: true,
      likes: 0,
      views: 0,
      comments: []
    });
  },

  'paste.addComment': function ( id, comment) {
    return Pastes.update(id, {$push: { comments: comment } });
  },

  'paste.view': function (id) {
    return Pastes.findOne(id);
  },

  'paste.remove': function(id) {
    return Pastes.remove(id);
  },

  'paste.edit': function( { id }, content ) {
    return Pastes.update(id, { $set: { content } });
  },

  'paste.saveEdit': function( { id }, title, desc ) {
    return Pastes.update(id, { $set: { title, desc } });
  },

  'paste.share': function({ _id }, sharedWith ) {
    return Pastes.update(_id, { $push: { sharedWith: sharedWith }});
  },

  'paste.hide': function(paste) {
    return Pastes.update(paste._id, { $set: { public: false } });
  }

});


export const Pastes = new Mongo.Collection('paste');
