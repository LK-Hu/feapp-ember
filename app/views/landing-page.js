// app/views/landing-page.js

import Ember from 'ember';

export default Ember.View.extend({
  actions: {
    transitionAndScroll: function(route, pageLocation) {

      this.get('controller').send('transitionToRoute', route);
      this.send('scrollTo', pageLocation);
    },
    scrollTo: function(pageLocation) {
      this.$().animate({
        scrollTop: this.$(pageLocation).offset().top
      });
    }
  }
});