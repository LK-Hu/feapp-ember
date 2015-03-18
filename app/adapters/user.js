// app/adapters/user.js

import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  // user GET, PUT, POST, PATCH go through /users, no namespace for versioning needed.
  host: 'http://localhost:3000'
});
