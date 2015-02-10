// app/routes/sign-in.js

import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model: function () {
    //return this.store.find('user');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('user', this.store.createRecord('user', {}));
  }
  
});