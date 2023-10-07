/* eslint-disable linebreak-style */
const express = require('express');

const routes = require('./routes');

// eslint-disable-next-line import/no-unresolved
const ContactController = require('./app/controllers/ContactController');

const app = express();

app.use(routes);

const newLocal = '/contacts';
app.get(newLocal, ContactController.index);

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
