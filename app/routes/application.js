// app/routes/application.js

import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  currentUser: {},
  actions: {
    sessionAuthenticationFailed: function(error) {
      this.controllerFor('signIn').set('signInErrorMessage', error.message);
    },
    setCurrentUser: function(currentUser) {
      this.set('currentUser', currentUser);
      console.log('XXX setCurrentUser = ' + this.get('currentUser').id);
    }
  }
});