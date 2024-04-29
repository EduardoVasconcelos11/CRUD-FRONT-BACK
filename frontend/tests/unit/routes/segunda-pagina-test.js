import { module, test } from 'qunit';
import { setupTest } from 'meu-projeto-ember/tests/helpers';

module('Unit | Route | segunda-pagina', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:segunda-pagina');
    assert.ok(route);
  });
});
