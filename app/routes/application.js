import EmpressApplicationRoute from 'empress-blog/routes/application';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends EmpressApplicationRoute {
  @service metrics;

  @service router;

  constructor() {
    super(...arguments);

    let router = this.router;
    router.on('routeDidChange', () => {
      const page = router.currentURL;
      const title = router.currentRouteName || 'unknown';

      this.metrics.trackPage({ page, title });
    });
  }
}
