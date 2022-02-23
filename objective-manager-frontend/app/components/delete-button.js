import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  actions: {
    delete(recordId) {
      const objective = this.store.peekRecord('objective', recordId);
      objective.destroyRecord();
    },
  },
});
