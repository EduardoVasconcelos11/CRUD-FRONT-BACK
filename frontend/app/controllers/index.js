// app/controllers/index.js

import Controller from '@ember/controller';

export default class IndexController extends Controller {
  nome = '';
  sobrenome = '';
  endereco = '';

  updateNome = (event) => {
    this.nome = event.target.value;
  };

  updateSobrenome = (event) => {
    this.sobrenome = event.target.value;
  };

  updateTelefone = (event) => {
    this.telefone = event.target.value;
  };

  clearForm() {
    // Limpar os valores dos campos do formulário
    this.setProperties({
      nome: '',
      sobrenome: '',
      telefone: '',
    });
  }
}
