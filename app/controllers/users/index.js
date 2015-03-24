// app/controllers/users/index.js

import Ember from "ember";

export default Ember.Controller.extend({
  init: function() {
    console.log('in users.index controller. ');
    console.log('user_name = ' + this.get('model').toString());
  }
});