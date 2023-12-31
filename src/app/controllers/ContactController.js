/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable-next-line linebreak-style */
/* eslint-disable padded-blocks */

const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {

  async index(request, response) {
    const contacts = await ContactsRepository.FindAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
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
