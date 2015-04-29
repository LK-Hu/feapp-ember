// app/models/family-user-relation.js

import DS from 'ember-data';

var FamilyUserRelation = DS.Model.extend({
  userId: DS.belongsTo('user', {async: true}),
  familyId: DS.belongsTo('family', {async: true}),
  userRole: DS.attr('string'),
  isPrimary: DS.attr('boolean', {defaultValue: false})
});

FamilyUserRelation.reopenClass({
  FIXTURES: [
    {id: 1, userId: 1, familyId: 1, userRole: 'parent', isPrimary: true},
    {id: 2, userId: 1, familyId: 2, userRole: 'parent', isPrimary: false},
    {id: 3, userId: 2, familyId: 2, userRole: 'kid', isPrimary: true}
  ]
});

export default FamilyUserRelation;