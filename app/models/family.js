// app/models/family.js

import DS from 'ember-data';

var Family = DS.Model.extend({
  familyName: DS.attr('string'),
  familyUserRelations: DS.hasMany('familyUserRelation', { async: true }),
  users: function() {
    return this.get('familyUserRelations').then(function(familyUserRelations) {
      return familyUserRelations.mapBy('userId');
    });
  }.property('familyUserRelations.@each.userId')
});

Family.reopenClass({
  FIXTURES: [
    { id: 1, familyName: 'hufamily' },
    { id: 2, familyName: 'yamfamily' }
  ]
});

export default Family;