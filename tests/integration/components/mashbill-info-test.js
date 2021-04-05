import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

let titleSelector = '[data-test-mashbill-info-title]';
let typeSelector = 'data-test-mashbill-info-type';

module('Integration | Component | mashbill-info', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.mashbill = {
      corn: 60,
      wheat: 32,
      barley: 8,
    };
  });

  test('it renders', async function (assert) {
    await render(hbs`<MashbillInfo @mashbill={{this.mashbill}} />`);

    assert.dom(titleSelector).hasText('Mashbill', 'title rendered');
    assert
      .dom(`[${typeSelector}="Corn"]`)
      .hasText(`Corn: ${this.mashbill.corn}%`, 'corn rendered');
    assert
      .dom(`[${typeSelector}="Wheat"]`)
      .hasText(`Wheat: ${this.mashbill.wheat}%`, 'wheat rendered');
    assert
      .dom(`[${typeSelector}="Barley"]`)
      .hasText(`Barley: ${this.mashbill.barley}%`, 'barley rendered');
  });

  test('it renders arbitrary grain types', async function (assert) {
    delete this.mashbill.corn;
    delete this.mashbill.barley;
    this.mashbill['foo'] = 900;

    await render(hbs`<MashbillInfo @mashbill={{this.mashbill}} />`);

    assert.dom(titleSelector).exists('title rendered');
    assert
      .dom(`[${typeSelector}="Foo"]`)
      .hasText(`Foo: ${this.mashbill.foo}%`, 'foo rendered');
    assert.dom(`[${typeSelector}="Wheat"]`).exists('wheat rendered');
    assert.dom(`[${typeSelector}="Corn"]`).doesNotExist('corn not rendered');
    assert
      .dom(`[${typeSelector}="Barley"]`)
      .doesNotExist('barley not rendered');
  });
});
