'use strict';

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({

  'paste.create': function() {
    /*
    Comments schema
      {email: String, comment: String, date: new Date()}
    */
    return Pastes.insert({
      title: '',
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

  'paste.view': function (id) {
    return Pastes.findOne(id);
  },

  'paste.remove': function(id) {
    return Pastes.remove(id);
  },

  'paste.edit': function( { id }, content ) {
    return Pastes.update(id, { $set: { content } });
  },

  'paste.saveTitle': function( { id }, title ) {
    return Pastes.update(id, { $set: { title } });
  },

  'paste.share': function(paste) {
    return Pastes.update(paste._id, { $set: { public: true } });
  },

  'paste.hide': function(paste) {
    return Pastes.update(paste._id, { $set: { public: false } });
  }

});


export const Pastes = new Mongo.Collection('paste');
