// app/models/family.js

import DS from 'ember-data';

export default DS.Model.extend({
  familyName: DS.attr('string'),
  familyEmail: DS.attr('string')
});