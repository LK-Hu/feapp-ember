// app/routes/users/index.js

import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user',1);
  }
});
