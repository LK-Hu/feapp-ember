// app/routes/sign-up.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    //return this.store.find('user');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('user', this.store.createRecord('user', {}));
  }
});