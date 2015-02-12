// app/adapters/application.js

import DS from 'ember-data';

// export default DS.ActiveModelAdapter.extend({
//   host: 'https://millionaire-labs.herokuapp.com',
//   namespace: 'v1'
// });

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'v1'
});
