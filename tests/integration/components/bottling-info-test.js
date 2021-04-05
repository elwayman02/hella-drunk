import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

let titleSelector = '[data-test-release-info-title]';
let yearSelector = '[data-test-release-info-year]';
let batchSelector = '[data-test-release-info-batch]';
let bottleSelector = '[data-test-release-info-bottle]';

module('Integration | Component | bottling-info', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.release = {
      year: 2021,
      batch: 4,
      bottle: 376,
    };
  });

  test('it renders', async function (assert) {
    await render(hbs`<BottlingInfo @release={{this.release}} />`);

    assert.dom(titleSelector).hasText('Bottling', 'title rendered');
    assert
      .dom(yearSelector)
      .hasText(`Year: ${this.release.year}`, 'year rendered');
    assert
      .dom(batchSelector)
      .hasText(`Batch #: ${this.release.batch}`, 'batch rendered');
    assert
      .dom(bottleSelector)
      .hasText(`Bottle #: ${this.release.bottle}`, 'bottle rendered');
  });

  test('it renders without year', async function (assert) {
    delete this.release.year;

    await render(hbs`<BottlingInfo @release={{this.release}} />`);

    assert.dom(titleSelector).exists('title rendered');
    assert.dom(yearSelector).doesNotExist('year not rendered');
    assert.dom(batchSelector).exists('batch rendered');
    assert.dom(bottleSelector).exists('bottle rendered');
  });

  test('it renders without batch', async function (assert) {
    delete this.release.batch;

    await render(hbs`<BottlingInfo @release={{this.release}} />`);

    assert.dom(titleSelector).exists('title rendered');
    assert.dom(yearSelector).exists('year rendered');
    assert.dom(batchSelector).doesNotExist('batch not rendered');
    assert.dom(bottleSelector).exists('bottle rendered');
  });

  test('it renders without bottle', async function (assert) {
    delete this.release.bottle;

    await render(hbs`<BottlingInfo @release={{this.release}} />`);

    assert.dom(titleSelector).exists('title rendered');
    assert.dom(yearSelector).exists('year rendered');
    assert.dom(batchSelector).exists('batch rendered');
    assert.dom(bottleSelector).doesNotExist('bottle not rendered');
  });
});
