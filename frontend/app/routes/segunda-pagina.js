import Route from '@ember/routing/route';

export default class SegundaPaginaRoute extends Route {
  model() {
    // Supondo que você esteja obtendo os dados dos usuários de algum serviço ou API
    return [
      { nome: 'Usuário 1', email: 'usuario1@example.com', senha: 'senha123' },
      { nome: 'Usuário 2', email: 'usuario2@example.com', senha: 'senha456' },
      // Adicione mais dados de usuários conforme necessário
    ];
  }
}
