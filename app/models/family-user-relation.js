// app/models/family-user-relation.js

import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', {async: true}),
  family: DS.belongsTo('family', {async: true})
});