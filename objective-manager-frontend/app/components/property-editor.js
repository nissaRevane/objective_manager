import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  store: service(),

  actions: {
    update(recordId, name) {
      this.store.findRecord('objective', recordId).then(function(objective) {
        objective[name] = 'Fail to get your value';
        objective.save();
      });
    },
  },
});
