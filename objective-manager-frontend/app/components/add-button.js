import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    start() {
      let newRecord = this.store.createRecord(
        'objective',
        { title: 'Undefined objective', weight: 0 }
      );
      newRecord.save();
    }
  },
});
