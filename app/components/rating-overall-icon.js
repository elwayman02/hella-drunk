import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class RatingOverallIconComponent extends Component {
  get backgroundStyle() {
    let height = 25 * (this.args.rating / 100);
    return htmlSafe(`height: ${height}rem;`);
  }
}
