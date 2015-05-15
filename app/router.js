// app/router.js

import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() { 
  this.route('signUp');
  this.route('signIn');

  this.route('home');


  this.resource('users', function() {
    this.route('index');
  });

  this.resource('user', { path: 'users/:user_id' }, function() {

  });

  this.resource('families', function() {
    this.route('search');
    this.route('index');
    this.route('create');
  });

  this.resource('family', { path: 'families/:family_id' }, function() {

  });


});
export default Router;
