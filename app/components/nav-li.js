// app/components/nav-li.js

import Ember from 'ember';
export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['page-scroll'],
  classNameBindings: ['active'],
  // active: pass in value,
  // dataTarge: pass in value,
  // route: pass in value,
  // onClickActions: pass in value (array)
  transitionToRoute: 'appTransitTo',
  scrollTo: 'scrollTo',
  click: function() {
    var self = this;
    self.sendAction('transitionToRoute', self.get('route'));
    self.sendAction('scrollTo', self.get('dataTarget'));
  }
});