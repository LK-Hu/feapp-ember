import DS from 'ember-data';

var User = DS.Model.extend({
  userName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  familyUserRelations: DS.hasMany('familyUserRelation', {async: true}),
  families: function() {
    return this.get('familyUserRelations').then(function(familyUserRelations) {
        return familyUserRelations.mapBy('familyId');
    });
  }.property('familyUserRelations.@each.familyId')
});

User.reopenClass({
  FIXTURES: [
    {id: 1, userName: 'likun', email: 'likun@millionaire-labs.com', password: 'hu.likun', familyUserRelations: ['1', '2']},
    {id: 2, userName: 'Edward', email: 'edward@millionaire-labs.com', familyUserRelations: ['3']}
  ]
});

export default User;