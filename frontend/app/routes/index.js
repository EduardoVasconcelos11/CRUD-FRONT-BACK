import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return {};
  }

  actions = {
    async submitFormulario() {
      let nome = this.controller.nome;
      let sobrenome = this.controller.sobrenome;
      let telefone = this.controller.telefone;

      let payload = {
        nomeUsuario: nome,
        sobrenomeUsuario: sobrenome,
        telefoneUsuario: telefone,
      };
      // console.log('Payload:', payload);
      try {
        let response = await fetch('http://localhost:3000/api/createUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

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
