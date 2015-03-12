// app/controllers/sign-in.js

import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  // specify Devise authenticator to be used
  authenticator: 'simple-auth-authenticator:devise',
  actions: {
    authenticate: function() {
     var self = this;
     this._super().then(function(message) {
      console.log(message);
     }, function(message){
      self.set('errorMessage', message);
     });
    }
  }

});