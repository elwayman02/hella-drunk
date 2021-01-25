import CATEGORY_MULTIPLIERS from 'hella-drunk/constants/category-multipliers';

export default function calculateRating({
  nose,
  palate,
  finish,
  complexity,
  uniqueness,
}) {
  return (
    nose * CATEGORY_MULTIPLIERS.NOSE +
    palate * CATEGORY_MULTIPLIERS.PALATE +
    finish * CATEGORY_MULTIPLIERS.FINISH +
    complexity * CATEGORY_MULTIPLIERS.COMPLEXITY +
    uniqueness * CATEGORY_MULTIPLIERS.UNIQUENESS
  );
}
