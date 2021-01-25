import Component from '@glimmer/component';
import calculateRating from 'hella-drunk/utils/hella-drunk-rating';

export default class RatingOverallComponent extends Component {
  get total() {
    return calculateRating(this.args.ratings);
  }
}
