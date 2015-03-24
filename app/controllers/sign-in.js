// app/controllers/sign-in.js

import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  // signInErrorMessage will be set when sessionAuthenticationFailed
  signInErrorMessage: '', 
  displayErrorMessage: function() {
    console.log('display error message');
    console.log(Ember.$('h2').text());
  }.observes('signInErrorMessage'),
  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:devise', data);
    }
  }

});