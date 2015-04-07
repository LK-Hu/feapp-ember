// app/routes/sign-up.js

import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model: function () {
    return this.store.createRecord('user', {});
  }
});