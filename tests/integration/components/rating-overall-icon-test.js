import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

let frontSelector = '[data-test-rating-overall-icon-foreground]';
let backSelector = '[data-test-rating-overall-icon-background]';

module('Integration | Component | rating-overall-icon', function (hooks) {
  setupRenderingTest(hooks);

  test('renders icon with background color', async function (assert) {
    await render(hbs`<RatingOverallIcon @rating="100"/>`);

    assert.dom(frontSelector).exists('foreground icon rendered');
    assert.dom(backSelector).exists('icon background rendered');
    assert
      .dom(backSelector)
      .hasStyle({ height: '250px' }, 'icon background at 100%');
  });

  test('renders icon with partial background color', async function (assert) {
    await render(hbs`<RatingOverallIcon @rating="50"/>`);

    assert.dom(frontSelector).exists('foreground icon rendered');
    assert.dom(backSelector).exists('icon background rendered');
    assert
      .dom(backSelector)
      .hasStyle({ height: '125px' }, 'icon background at 50%');
  });

  test('renders icon with no background color', async function (assert) {
    await render(hbs`<RatingOverallIcon @rating="0"/>`);

    assert.dom(frontSelector).exists('foreground icon rendered');
    assert.dom(backSelector).exists('icon background rendered');
    assert
      .dom(backSelector)
      .hasStyle({ height: '0px' }, 'icon background at 0%');
  });
});
