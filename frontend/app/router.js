import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // Defina suas rotas aqui
  this.route('index', { path: '/' }); // Rota para a página inicial
  this.route('segunda-pagina'); // Rota para a segunda página
});

export default Router;
