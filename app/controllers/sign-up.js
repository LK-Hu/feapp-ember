// app/controllers/sign-up.js

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {
      var self = this;
      var user = this.store.createRecord('user', {});
      user.set('userName', this.get('userName'));
      user.set('email', this.get('email'));
      user.set('password', this.get('password'));
      user.set('passwordConfirmation', this.get('passwordConfirmation'));

      user.save().then(function(response){
        console.log(response);
      },function(response){
        // Ember.run will ensure of refreshing view and templates.
        return Ember.run(function() {
          return self.send('registrationFailed', response);
        });
      });
    },
    registrationFailed: function(response) {
      var error_str = 'Registration is failed. \n';
      for (var key in response.errors) {
        if (response.errors.hasOwnProperty(key)) {
          error_str += key + ' ' + response.errors[key] + '.\n';
        }
      }
    }
  }

});