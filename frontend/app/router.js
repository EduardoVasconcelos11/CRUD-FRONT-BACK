import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('segunda-pagina');
  this.route('editar-usuario', { path: '/editar-usuario/:usuario_id' });
});

export default Router;
