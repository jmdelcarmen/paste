'use strict';

import { Meteor } from 'meteor/meteor';
import { Pastes } from '../imports/collections/pastes';

Meteor.startup(() => {
  console.log('Construction ongoing at port 3000. . .');

  Meteor.publish('public.pastes', function () {
    return Pastes.find({ public: true });
  });


});
