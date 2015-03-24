// app/mixins/adapter-config.js

import Ember from 'ember';
import ENV from 'feapp/config/environment';

export default Ember.Mixin.create({
  host: ENV.host,
  namespace: ENV.version,
  headers: {
    'Accept': "application/json, text/javascript; q=0.01"
  }
});