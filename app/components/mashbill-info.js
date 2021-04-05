import Component from '@glimmer/component';

export default class MashbillInfoComponent extends Component {
  get grains() {
    return Object.entries(this.args.mashbill).map(function ([
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
