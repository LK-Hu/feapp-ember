// app/adapters/application.js

import DS from 'ember-data';

// export default DS.ActiveModelAdapter.extend({
//   host: 'https://millionaire-labs.herokuapp.com',
//   namespace: 'v1'
// });

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'v1',
  headers: {
    'Accept': "application/json, text/javascript; q=0.01"
  }
});
