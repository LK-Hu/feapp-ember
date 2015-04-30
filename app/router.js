// app/router.js

import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
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

  this.route('home');


  this.resource('users', function() {
    this.route('home');
    this.route('profile');
  });

  this.resource('user', { path: 'users/:user_id' }, function() {

  });

  this.resource('families', function() {
    this.route('search');
  });

  this.resource('family', { path: 'families/:family_id' }, function() {

  });


});
export default Router;
