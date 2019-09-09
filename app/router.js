import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { inject } from '@ember/service'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('alumnos');
});

export default Router;
