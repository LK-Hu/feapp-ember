import DS from 'ember-data';
import AdapterConfigMixin from 'feapp/mixins/adapter-config';

export default DS.ActiveModelAdapter.extend(AdapterConfigMixin, {
  createRecord: function(store, type, record) {
    var namespace = this.get('namespace');
    this.set('namespace', '');
    var value = this._super(store, type, record);
    this.set('namespace', namespace);
    return value;
  }
});
