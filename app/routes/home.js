// app/routes/users/index.js

import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Env from 'feapp/config/environment';

export default Ember.Route.extend({
  beforeModel: function() {
    Ember.$('body').addClass('loading');
  },
  // FIND current user
  // model: function() {
  //   var identificationAttributeName = Env['simple-auth-devise']['identificationAttributeName'];
  //   var identificationAttribute = Ember.$.parseJSON(window.localStorage[Env['simple-auth']['localStorageKey']])[identificationAttributeName];

  //   var query = {};
  //   query[identificationAttributeName] = identificationAttribute;

  //   return this.store.find('user', query);
  // },
  model: function() {
    return this.store.find('user', 3);
  },

  afterModel: function(user, transition) {
    var self = this;

    user.get('families').then(function(families){

      if (families.length > 0){
        user.get('familyUserRelations').then(function(familyUserRelations){
          var primaryFamilyUserRelation = familyUserRelations.find(function(familyUserRelation){
            return familyUserRelation.get('isPrimary');
          });
          if (primaryFamilyUserRelation === undefined){
            // user didn't set primary family
            self.transitionTo('family.list');
          } else {
            // user has primary family
            var primaryFamily = families.find(function(family){
              return family.get('id') === primaryFamilyUserRelation.get('familyId');
            });
            self.transitionTo('parent.dashboard', primaryFamily);
          }
        });
      } else {
        // user doesn't belong to any family
        self.transitionTo('families.search');
      }
    });

  }
});