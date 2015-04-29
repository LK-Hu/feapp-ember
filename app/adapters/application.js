// app/adapters/application.js

import DS from 'ember-data';
import AdapterConfigMixin from 'feapp/mixins/adapter-config';

// export default DS.ActiveModelAdapter.extend(AdapterConfigMixin, {

// });

export default DS.FixtureAdapter.extend(AdapterConfigMixin, {

});