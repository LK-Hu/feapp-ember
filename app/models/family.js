// app/models/family.js

import DS from 'ember-data';

export default DS.Model.extend({
  familyName: DS.attr('string'),
  familyUserRelations: DS.hasMany('familyUserRelation', { async: true }),
  users: function() {
    return this.get('familyUserRelations').then(function(familyUserRelations) {
      return familyUserRelations.mapBy('user');
    });
  }.property('familyUserRelations.@each.user')
});