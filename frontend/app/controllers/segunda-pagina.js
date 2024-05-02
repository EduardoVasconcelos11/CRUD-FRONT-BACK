// app/controllers/segunda-pagina.js

import Controller from '@ember/controller';
import { action } from '@ember/object';
import $ from 'jquery';


export default class SegundaPaginaController extends Controller {
  @action
  excluirUsuario(idUsuario) {
    $.ajax({
      url: `http://localhost:3000/api/deleteUser/${idUsuario}`,
      method: 'DELETE',
      success: function(response) {
        console.log('Usuário excluído com sucesso:', response);
        location.reload();
      },
      error: function(error) {
        console.error('Erro ao excluir usuário:', error);
      }
    });
  }

  @action
  editarUsuario(idUsuario) {
    // Aqui você pode implementar a lógica para editar o usuário
    console.log(`Editando usuário com ID ${idUsuario}`);
      // Montar a URL desejada com o ID do usuário
      const url = `/editar-usuario/${idUsuario}`;

      // Fazer a transição para a rota desejada
      window.location.href = url;
  }
}
