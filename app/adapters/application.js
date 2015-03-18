// app/adapters/application.js

import DS from 'ember-data';
import ENV from 'feapp/config/environment';

export default DS.ActiveModelAdapter.extend({
  host: ENV.host,
  namespace: ENV.version,
  headers: {
    'Accept': "application/json, text/javascript; q=0.01"
  }
});
