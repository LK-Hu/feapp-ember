// app/controllers/blog.js

import Ember from "ember";
import Session from 'simple-auth/session';

export default Ember.Controller.extend({
  init: function() {
    var secureData         = Session.authenticator;
    // var userToken          = secureData['token'];
    // var userIdentification = secureData['user_name'];
    console.log('secureData =' + this.get('isAuthenticated'));
    // console.log('userToken =' + userToken);
    // console.log('userIdentification = ' + userIdentification);
  }
});