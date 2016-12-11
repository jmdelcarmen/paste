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
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownderId: this.userId,
      public: true,
      likes: 0,
      views: 0,
      comments: []
    });
  },

  'paste.remove': function(bin) {
    return Pastes.remove(bin)
  },

  'paste.update': function(bin, content) {
    return Pastes.update(bin._id, { $set: { content } });
  },

  'paste.share': function(bin) {
    return Pastes.update(bin._id, { $set: { public: true } });
  },

  'paste.hide': function(bin) {
    return Pastes.update(bin._id, { $set: { public: false } });
  }

});


export const Pastes = new Mongo.Collection('paste');
