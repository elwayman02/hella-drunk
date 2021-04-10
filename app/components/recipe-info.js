import Component from '@glimmer/component';

export default class IngredientInfoComponent extends Component {
  get ingredients() {
    return Object.entries(this.args.recipe).map(function ([
      [keyFirstLetter, ...restOfKey],
      value,
    ]) {
      return {
        type: keyFirstLetter.toUpperCase() + restOfKey.join(''),
        share: value,
      };
    });
  }
}
