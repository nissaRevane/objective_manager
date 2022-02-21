'use strict';

define("objective-manager-frontend/tests/acceptance/application-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-data-factory-guy"], function (_qunit, _testHelpers, _emberQunit, _emberDataFactoryGuy) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit",0,"ember-data-factory-guy"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | application', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    hooks.beforeEach(function () {
      (0, _emberDataFactoryGuy.mockFindAll)('objective', 1);
    });
    (0, _qunit.test)('visit main page', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
      assert.dom('js-objective-title').hasText('First objective');
      assert.dom('js-objective-weight').hasText('50');
    });
    (0, _qunit.test)('can create new objectives', async function (assert) {
      await (0, _testHelpers.visit)('/');
      const addObjectiveButton = '.js-add-objective-button';
      assert.dom(addObjectiveButton).exists({
        count: 1
      });
      await click(addObjectiveButton);
      (0, _emberDataFactoryGuy.mockCreate)('objective').match({
        title: 'Undefined objective',
        weight: 0
      }).returns({
        attrs: {
          id: 66,
          title: 'Undefined objective',
          weight: 0
        }
      });
      (0, _emberDataFactoryGuy.mockReload)('objective', 66);
    });
    (0, _qunit.test)('can update objectives', async function (assert) {
      await (0, _testHelpers.visit)('/');
      const addObjectiveButton = '.js-update-objective-button';
      assert.dom(addObjectiveButton).exists({
        count: 2
      });
      await click(addObjectiveButton);
      (0, _emberDataFactoryGuy.mockUpdate)('objective'); // [...]
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
define("objective-manager-frontend/tests/integration/components/add-button-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | add-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <AddButton />
      */
      {
        "id": "QnS8pfNR",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"add-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <AddButton>
              template block text
            </AddButton>
          
      */
      {
        "id": "65t8OnDc",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"add-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("objective-manager-frontend/tests/integration/components/property-editor-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | property-editor', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PropertyEditor />
      */
      {
        "id": "710bW6UC",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"property-editor\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <PropertyEditor>
              template block text
            </PropertyEditor>
          
      */
      {
        "id": "A/JlvIL3",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"property-editor\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("objective-manager-frontend/tests/integration/components/update-button-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | update-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <UpdateButton />
      */
      {
        "id": "D1B8Z4Kr",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"update-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <UpdateButton>
              template block text
            </UpdateButton>
          
      */
      {
        "id": "lC5e27WB",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"update-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
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
define("objective-manager-frontend/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
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
