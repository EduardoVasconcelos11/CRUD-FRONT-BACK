// app/routes/segunda-pagina.js

import Route from '@ember/routing/route';

export default class SegundaPaginaRoute extends Route {
  async model() {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
      }
      const data = await response.json();
      console.log(data); // Faça algo com os dados recebidos
      return data;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      return []; // Retorna um array vazio em caso de erro
    }
  }
}
