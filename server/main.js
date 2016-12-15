'use strict';

import { Meteor } from 'meteor/meteor';
import { Pastes } from '../imports/collections/pastes';

Meteor.startup(() => {

  Meteor.publish('public.pastes', function () {
    return Pastes.find({ public: true });
  });

  Meteor.publish('userData', function (id) {
    return Meteor.users.find(id);
  });

  console.log('Construction ongoing at port 3000. . .');
});
