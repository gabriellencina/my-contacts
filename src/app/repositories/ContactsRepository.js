/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-promise-executor-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line linebreak-style, import/no-extraneous-dependencies

const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Gabriel',
    email: 'gabriellencina831@gmail.com',
    phone: '51998668787',
    category_id: v4(),
  },

  {
    id: v4(),
    name: 'Felipe',
    email: 'felipe831@gmail.com',
    phone: '51993344564',
    category_id: v4(),
  },
];

class ContactsRepository {
  FindAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id == id),
    ));
  }
}

module.exports = new ContactsRepository();
