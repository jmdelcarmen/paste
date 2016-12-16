'use strict';

import { Meteor } from 'meteor/meteor';
import { Pastes } from '../imports/collections/pastes';

Meteor.startup(() => {

  Meteor.publish('public.pastes', function () {
    return Pastes.find({ public: true });
  });

  Meteor.publish('userData', function () {
    return Meteor.users.find();
  });

  console.log('Construction ongoing at port 3000. . .');
});
