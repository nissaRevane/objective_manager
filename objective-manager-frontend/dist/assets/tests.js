'use strict';

define("objective-manager-frontend/tests/acceptance/application-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-data-factory-guy"], function (_qunit, _testHelpers, _emberQunit, _emberDataFactoryGuy) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit",0,"ember-data-factory-guy"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | application', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visit main page', async function (assert) {
      (0, _emberDataFactoryGuy.mockFindAll)('objective', 1);
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("objective-manager-frontend/tests/factories/objective", ["ember-data-factory-guy"], function (_emberDataFactoryGuy) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-data-factory-guy"eaimeta@70e063a35619d71f

  _emberDataFactoryGuy.default.define('objective', {
    default: {
      title: 'First objective',
      weight: 50
    }
  });
});
define("objective-manager-frontend/tests/test-helper", ["objective-manager-frontend/app", "objective-manager-frontend/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"objective-manager-frontend/app",0,"objective-manager-frontend/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("objective-manager-frontend/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("objective-manager-frontend/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define('objective-manager-frontend/config/environment', [], function() {
  var prefix = 'objective-manager-frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('objective-manager-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
