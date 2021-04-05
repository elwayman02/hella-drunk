import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

let titleSelector = '[data-test-release-card-title]';
let typeSelector = '[ data-test-release-card-type]';
let companySelector = '[ data-test-release-card-company]';
let distillerySelector = '[ data-test-release-card-distillery]';
let proofSelector = '[ data-test-release-card-proof]';
let ageSelector = '[ data-test-release-card-age]';
let websiteSelector = '[ data-test-release-card-website]';
let bottlingSelector = '[data-test-bottling-info]';
let mashbillSelector = '[data-test-mashbill-info]';

module('Integration | Component | release-card', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.info = {
      type: 'Blend',
      company: 'Hella Drunk',
      distillery: 'Hella Drunk Distillery',
      proof: 100,
      age: 5,
      website: 'https://helladrunk.com',
      release: {
        year: 2021,
      },
      mashbill: {
        corn: 100,
      },
    };
  });

  test('it renders', async function (assert) {
    await render(hbs`<ReleaseCard @info={{this.info}} />`);

    assert.dom(titleSelector).hasText('Release Info', 'title rendered');
    assert
      .dom(typeSelector)
      .hasText(`Type: ${this.info.type}`, 'type rendered');
    assert
      .dom(companySelector)
      .hasText(`Company: ${this.info.company}`, 'company rendered');
    assert
      .dom(distillerySelector)
      .hasText(`Distillery: ${this.info.distillery}`, 'distillery rendered');
    assert
      .dom(proofSelector)
      .hasText(`Proof: ${this.info.proof}`, 'proof rendered');
    assert.dom(ageSelector).hasText(`Age: ${this.info.age}`, 'age rendered');
    assert.dom(websiteSelector).hasText('Official Website', 'website rendered');
    assert
      .dom(`${websiteSelector} a`)
      .hasAttribute('href', this.info.website, 'website url correct');
    assert.dom(bottlingSelector).exists('bottling rendered');
    assert.dom(mashbillSelector).exists('mashbill rendered');
  });

  test('it renders with missing info', async function (assert) {
    delete this.info.proof;
    delete this.info.release;
    delete this.info.mashbill;

    await render(hbs`<ReleaseCard @info={{this.info}} />`);

    assert.dom(titleSelector).exists('title rendered');
    assert.dom(typeSelector).exists('type rendered');
    assert.dom(companySelector).exists('company rendered');
    assert.dom(distillerySelector).exists('distillery rendered');
    assert.dom(proofSelector).doesNotExist('proof not rendered');
    assert.dom(ageSelector).exists('age rendered');
    assert.dom(websiteSelector).exists('website rendered');
    assert.dom(bottlingSelector).doesNotExist('bottling not rendered');
    assert.dom(mashbillSelector).doesNotExist('mashbill not rendered');
  });

  test('it renders with no info', async function (assert) {
    this.info = {};

    await render(hbs`<ReleaseCard @info={{this.info}} />`);

    assert.dom(titleSelector).exists('title rendered');
    assert.dom(typeSelector).doesNotExist('type not rendered');
    assert.dom(companySelector).doesNotExist('company not rendered');
    assert.dom(distillerySelector).doesNotExist('distillery not rendered');
    assert.dom(proofSelector).doesNotExist('proof not rendered');
    assert
      .dom(ageSelector)
      .hasText('Age: NAS', 'age rendered as NAS when missing');
    assert.dom(websiteSelector).doesNotExist('website not rendered');
    assert.dom(bottlingSelector).doesNotExist('bottling not rendered');
    assert.dom(mashbillSelector).doesNotExist('mashbill not rendered');
  });
});
