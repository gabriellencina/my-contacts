/* eslint-disable linebreak-style */
/* eslint-disable-next-line linebreak-style */
/* eslint-disable padded-blocks */
class ContactController {

  index(request, response) {
    // Listar todos os registros
    response.send('Send from Contact Controller');
  }

  show() {
  // Obter um registro
  }

  store() {
  // Criar novo registro

  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
