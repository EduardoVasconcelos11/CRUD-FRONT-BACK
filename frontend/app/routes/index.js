// app/routes/index.js

import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  model() {
    return {};
  }

  @action
  submitFormulario(event) {
    console.log(event)
    event.preventDefault();
    let nome = event.target.elements.nome.value;
    let email = event.target.elements.email.value;
    let senha = event.target.elements.senha.value;
    let payload = {
      nome: nome,
      email: email,
      senha: senha
    };

    // Simulando ação de enviar dados para API
    console.log('Payload JSON:', JSON.stringify(payload));

    // Limpar campos do formulário
    event.target.reset();
  }
}
