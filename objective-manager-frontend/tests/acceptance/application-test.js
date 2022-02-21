import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { mockFindAll } from 'ember-data-factory-guy';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  test('visit main page', async function (assert) {
    mockFindAll('objective', 1);
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
