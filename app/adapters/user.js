// app/adapters/user.js

import DS from 'ember-data';
import ENV from 'feapp/config/environment';

export default DS.ActiveModelAdapter.extend({
  // user GET, PUT, POST, PATCH go through /users, no namespace for versioning needed.
  host: ENV.host
});
