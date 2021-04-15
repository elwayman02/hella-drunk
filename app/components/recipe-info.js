import Component from '@glimmer/component';

function capitalize([firstLetter, ...restOfWord]) {
  return firstLetter.toUpperCase() + restOfWord.join('');
}

function readableKey(key) {
  let words = key.split('-');

  return words.reduce(function (partialKey, word) {
    if (partialKey.length) {
      return partialKey.concat(' ', capitalize(word));
    }
    return capitalize(word);
  }, '');
}

export default class IngredientInfoComponent extends Component {
  get ingredients() {
    return Object.entries(this.args.recipe).map(function ([key, value]) {
      return {
        type: readableKey(key),
        share: value,
      };
    });
  }
}
