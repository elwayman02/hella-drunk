import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

let iconSelector = 'data-test-rating-category-icon';
let infoSelector = '[data-test-rating-category-info]';

module('Integration | Component | rating-category', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.name = 'foo';
    this.rating = 3.5;

    await render(
      hbs`<RatingCategory @name={{this.name}} @rating={{this.rating}} />`
    );

    assert
      .dom(infoSelector)
      .hasText(`${this.name}: ${this.rating}`, 'rating rendered');
    assert.dom(`[${iconSelector}="1"]`).exists('first icon rendered');
    assert.dom(`[${iconSelector}="2"]`).exists('second icon rendered');
    assert.dom(`[${iconSelector}="3"]`).exists('third icon rendered');
    assert.dom(`[${iconSelector}="4"]`).exists('fourth icon rendered');
    assert.dom(`[${iconSelector}="5"]`).exists('fifth icon rendered');
  });
});
