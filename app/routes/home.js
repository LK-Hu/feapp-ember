// app/routes/users/index.js

import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Env from 'feapp/config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function() {
    Ember.$('body').addClass('loading');
  },
  model: function() {
    var identificationAttributeName = Env['simple-auth-devise']['identificationAttributeName'];
    var identificationAttribute = Ember.$.parseJSON(window.localStorage[Env['simple-auth']['localStorageKey']])[identificationAttributeName];

    var query = {};
    query[identificationAttributeName] = identificationAttribute;

    return this.store.find('user', query);
  },
  setupController: function(user, controller) {
    // pre-load the families
    var familyUserRelations = Ember.RSVP.makePromise(user.get('familyUserRelations'));
  }
});