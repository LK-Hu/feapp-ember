// app/controllers/landingpage.js

import Ember from "ember";

export default Ember.Controller.extend({
  init: function(){
    window.fnames = [];
    window.ftypes = [];
    window.fnames[0]='EMAIL';
    window.ftypes[0]='email';
    window.fnames[1]='FNAME';
    window.ftypes[1]='text';
    window.fnames[2]='LNAME';
    window.ftypes[2]='text';
  },
  $mcj:Ember.$.noConflict(true),
  navbar: {
    about: {
      text: 'About',
      route: '/',
      pageLocation: '#about',
      active: false
    },
    features: {
      text: 'Features',
      route: '/',
      pageLocation: '#portfolio',
      active: false
    },
    team: {
      text: 'Team',
      route: '/',
      pageLocation: '#team',
      active: false
    },
    blog: {
      text: 'blog',
      route: 'blog.index',
      pageLocation: '.blog-page-top',
      active: false
    },
    signUp: {
      text: 'Sign Up',
      route: 'signUp',
      pageLocation: '.sign-up-page-top',
      active: false
    },
    signIn: {
      text: 'Sign In',
      route: 'signIn',
      pageLocation: '.sign-in-page-top',
      active: false
    },
    Users: {
      text: 'Users',
      route: 'users.index',
      pageLocation: '.sign-in-page-top',
      active: false
    }

  },
  actions: {
    scrollTo: function(pageLocation) {
      window.scrollTo(0, Ember.$(pageLocation).offset().top);
    }
  }
});