import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { mockFindAll, mockCreate, mockReload, mockUpdate } from 'ember-data-factory-guy';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    mockFindAll('objective', 1);
  });

  test('visit main page', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('js-objective-title').hasText('First objective');
    assert.dom('js-objective-weight').hasText('50');
  });

  test('can create new objectives', async function (assert) {
    await visit('/');

    const addObjectiveButton = '.js-add-objective-button';

    assert.dom(addObjectiveButton).exists({ count: 1 });
    await click(addObjectiveButton);

    mockCreate('objective')
      .match({
        title: 'Undefined objective',
        weight: 0,
      })
      .returns({
        attrs: { id: 66, title: 'Undefined objective', weight: 0 },
      });

    mockReload('objective', 66);
  });

  test('can update objectives', async function (assert) {
    await visit('/');

    const addObjectiveButton = '.js-update-objective-button';

    assert.dom(addObjectiveButton).exists({ count: 2 });
    await click(addObjectiveButton);

    mockUpdate('objective')

    // [...]
  });
});
