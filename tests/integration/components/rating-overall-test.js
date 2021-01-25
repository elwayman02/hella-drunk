import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import calculateRating from 'hella-drunk/utils/hella-drunk-rating';

let iconSelector = '[data-test-rating-overall-icon]';
let infoSelector = '[data-test-rating-overall-info]';

module('Integration | Component | rating-overall', function (hooks) {
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

  test('renders icon and rating', async function (assert) {
    let hdr = calculateRating(this.ratings);

    await render(hbs`<RatingOverall @ratings={{this.ratings}} />`);

    assert.dom(iconSelector).exists('icon rendered');
    assert.dom(infoSelector).hasText(`${hdr} HDR`, 'rating rendered');
  });
});
