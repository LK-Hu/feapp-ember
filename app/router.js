// app/router.js

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('landingPage', { path: '/' }, function() {
    this.resource('blog', function() {
      this.route('1');
      this.route('2');
      // add new blog route here.
    });
  });

  this.route('signUp');
  this.route('signIn');

  this.resource('users', function() {
    
  });
});

export default Router;
