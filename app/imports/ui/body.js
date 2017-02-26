/**
 * Created by brian on 2/26/2017.
 */

import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  tasks: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});
