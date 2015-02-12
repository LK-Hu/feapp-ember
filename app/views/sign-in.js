// app/views/sign-in.js

import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['sign-in-page-top'],
  didInsertElement: function() {
    window.scrollTo(0, 0);
  }
});