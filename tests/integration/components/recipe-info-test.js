import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

let titleSelector = '[data-test-recipe-info-title]';
let typeSelector = 'data-test-recipe-info-type';

module('Integration | Component | recipe-info', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.recipe = {
      corn: 60,
      wheat: 32,
      barley: 8,
    };
    this.title = 'Mashbill';
  });

  test('it renders', async function (assert) {
    await render(
      hbs`<RecipeInfo @title={{this.title}} @recipe={{this.recipe}} />`
    );

    assert.dom(titleSelector).hasText(this.title, 'title rendered');
    assert
      .dom(`[${typeSelector}="Corn"]`)
      .hasText(`Corn: ${this.recipe.corn}%`, 'corn rendered');
    assert
      .dom(`[${typeSelector}="Wheat"]`)
      .hasText(`Wheat: ${this.recipe.wheat}%`, 'wheat rendered');
    assert
      .dom(`[${typeSelector}="Barley"]`)
      .hasText(`Barley: ${this.recipe.barley}%`, 'barley rendered');
  });

  test('it renders arbitrary ingredient types', async function (assert) {
    this.recipe = {
      merlot: 69,
      syrah: 31,
    };
    this.title = 'Varietals';

    await render(
      hbs`<RecipeInfo @title={{this.title}} @recipe={{this.recipe}} />`
    );

    assert.dom(titleSelector).hasText(this.title, 'title rendered');
    assert
      .dom(`[${typeSelector}="Merlot"]`)
      .hasText(`Merlot: ${this.recipe.merlot}%`, 'merlot rendered');
    assert
      .dom(`[${typeSelector}="Syrah"]`)
      .hasText(`Syrah: ${this.recipe.syrah}%`, 'syrah rendered');
    assert.dom(`[${typeSelector}="Corn"]`).doesNotExist('corn not rendered');
  });
});
