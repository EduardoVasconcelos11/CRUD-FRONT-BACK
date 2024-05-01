import Route from '@ember/routing/route';
import { action } from '@ember/object';
let userId = null;

export default class IndexRoute extends Route {

  model(params) {
    userId = params.usuario_id;
    return {};
  }

  actions = {
    async atualizarUsuario() {
      let nome = this.controller.nome;
      let sobrenome = this.controller.sobrenome;
      let telefone = this.controller.telefone;

      let payload = {
        idUsuario: userId,
        nomeUsuario: nome,
        sobrenomeUsuario: sobrenome,
        telefoneUsuario: telefone,
      };

      console.log('Payload:', payload);
      try {
        let response = await fetch('http://localhost:3000/api/updateUser/', {
          method: 'PATCH', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .catch((error) => console.error('Erro ao enviar requisição:', error));
        console.log(response);
        if (response.ok) {
          console.log('Requisição bem-sucedida!');
        } else {
          console.error('Erro na requisição:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao enviar requisição:', error);
      }

      this.controller.clearForm();
    },
  };
}
