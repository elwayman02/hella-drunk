import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

let titleSelector = '[data-test-rating-card-title]';
let categorySelector = 'data-test-rating-card-category';
let overallSelector = '[data-test-rating-card-overall]';
let footerSelector = '[data-test-rating-card-footer]';

module('Integration | Component | rating-card', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.ratings = {
      nose: 1,
      palate: 1,
      finish: 1,
      complexity: 1,
      uniqueness: 1,
    };
  });

  test('it renders', async function (assert) {
    await render(hbs`<RatingCard @ratings={{this.ratings}} />`);

    assert
      .dom(titleSelector)
      .hasText('Our Hella Drunk Rating', 'title rendered');
    assert.dom(overallSelector).exists('overall rating rendered');
    assert.dom(footerSelector).exists('card footer rendered');
    assert.dom(`[${categorySelector}="nose"]`).exists('nose category rendered');
    assert
      .dom(`[${categorySelector}="palate"]`)
      .exists('palate category rendered');
    assert
      .dom(`[${categorySelector}="finish"]`)
      .exists('finish category rendered');
    assert
      .dom(`[${categorySelector}="complexity"]`)
      .exists('complexity category rendered');
    assert
      .dom(`[${categorySelector}="uniqueness"]`)
      .exists('uniqeness category rendered');
  });
});
