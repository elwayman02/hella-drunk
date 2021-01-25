import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

let fullSelector = '[data-test-rating-icon-full]';
let halfSelector = '[data-test-rating-icon-half]';
let emptySelector = '[data-test-rating-icon-empty]';

module('Integration | Component | rating-icon', function (hooks) {
  setupRenderingTest(hooks);

  test('renders full icon when rating exceeds value', async function (assert) {
    await render(hbs`<RatingIcon @rating="5" @value="1"/>`);

    assert.dom(fullSelector).exists('full icon rendered');
  });

  test('renders full icon when rating equals value', async function (assert) {
    await render(hbs`<RatingIcon @rating="5" @value="5"/>`);

    assert.dom(fullSelector).exists('full icon rendered');
  });

  test('renders half icon when rating is 0.5 less than value', async function (assert) {
    await render(hbs`<RatingIcon @rating="4.5" @value="5"/>`);

    assert.dom(halfSelector).exists('half icon rendered');
  });

  test('renders empty icon when rating is more than 0.5 less than value', async function (assert) {
    await render(hbs`<RatingIcon @rating="4" @value="5"/>`);

    assert.dom(emptySelector).exists('empty icon rendered');
  });
});
