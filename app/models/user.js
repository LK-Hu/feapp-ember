import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  familyUserRelations: DS.hasMany('familyUserRelation', {async: true}),
  families: function() {
    return this.get('familyUserRelations').then(function(familyUserRelations) {
        return familyUserRelations.mapBy('family');
    });
  }.property('familyUserRelations.@each.family')
});
