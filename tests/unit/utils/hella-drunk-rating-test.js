import calculateRating from 'hella-drunk/utils/hella-drunk-rating';
import CATEGORY_MULTIPLIERS from 'hella-drunk/constants/category-multipliers';
import { module, test } from 'qunit';

module('Unit | Utility | hella-drunk-rating', function (hooks) {
  hooks.beforeEach(function () {
    this.ratings = {
      nose: 1,
      palate: 1,
      finish: 1,
      complexity: 1,
      uniqueness: 1,
    };
  });

  test('applies correct multipliers', function (assert) {
    let result = calculateRating(this.ratings);
    assert.equal(
      result,
      CATEGORY_MULTIPLIERS.NOSE +
        CATEGORY_MULTIPLIERS.PALATE +
        CATEGORY_MULTIPLIERS.FINISH +
        CATEGORY_MULTIPLIERS.COMPLEXITY +
        CATEGORY_MULTIPLIERS.UNIQUENESS
    );
  });

  test('handles 0 for nose', function (assert) {
    this.ratings.nose = 0;

    let result = calculateRating(this.ratings);
    assert.equal(
      result,
      CATEGORY_MULTIPLIERS.PALATE +
        CATEGORY_MULTIPLIERS.FINISH +
        CATEGORY_MULTIPLIERS.COMPLEXITY +
        CATEGORY_MULTIPLIERS.UNIQUENESS
    );
  });

  test('handles 0 for palate', function (assert) {
    this.ratings.palate = 0;

    let result = calculateRating(this.ratings);
    assert.equal(
      result,
      CATEGORY_MULTIPLIERS.NOSE +
        CATEGORY_MULTIPLIERS.FINISH +
        CATEGORY_MULTIPLIERS.COMPLEXITY +
        CATEGORY_MULTIPLIERS.UNIQUENESS
    );
  });

  test('handles 0 for finish', function (assert) {
    this.ratings.finish = 0;

    let result = calculateRating(this.ratings);
    assert.equal(
      result,
      CATEGORY_MULTIPLIERS.NOSE +
        CATEGORY_MULTIPLIERS.PALATE +
        CATEGORY_MULTIPLIERS.COMPLEXITY +
        CATEGORY_MULTIPLIERS.UNIQUENESS
    );
  });

  test('handles 0 for complexity', function (assert) {
    this.ratings.complexity = 0;

    let result = calculateRating(this.ratings);
    assert.equal(
      result,
      CATEGORY_MULTIPLIERS.NOSE +
        CATEGORY_MULTIPLIERS.PALATE +
        CATEGORY_MULTIPLIERS.FINISH +
        CATEGORY_MULTIPLIERS.UNIQUENESS
    );
  });

  test('handles 0 for uniqueness', function (assert) {
    this.ratings.uniqueness = 0;

    let result = calculateRating(this.ratings);
    assert.equal(
      result,
      CATEGORY_MULTIPLIERS.NOSE +
        CATEGORY_MULTIPLIERS.PALATE +
        CATEGORY_MULTIPLIERS.FINISH +
        CATEGORY_MULTIPLIERS.COMPLEXITY
    );
  });

  test('allows decimal ratings', function (assert) {
    this.ratings.palate = 2.5;
    this.ratings.complexity = 0.5;

    let result = calculateRating(this.ratings);
    assert.equal(
      result,
      CATEGORY_MULTIPLIERS.NOSE +
        CATEGORY_MULTIPLIERS.PALATE * this.ratings.palate +
        CATEGORY_MULTIPLIERS.FINISH +
        CATEGORY_MULTIPLIERS.COMPLEXITY * this.ratings.complexity +
        CATEGORY_MULTIPLIERS.UNIQUENESS
    );
  });

  test('awards a perfect score for all 5s', function (assert) {
    let ratings = {
      nose: 5,
      palate: 5,
      finish: 5,
      complexity: 5,
      uniqueness: 5,
    };

    let result = calculateRating(ratings);
    assert.equal(result, 100);
  });
});
