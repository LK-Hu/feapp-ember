import DS from 'ember-data';

var User = DS.Model.extend({
  
  userName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string')

  // families: DS.hasMany('family', {async: true}),
  // accounts: DS.hasMany('account', {async: true})
  
});

export default User;
