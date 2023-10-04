/* eslint-disable linebreak-style */
const express = require('express');

const routes = require('./routes');

const ContactController = require('./app/controllers/ContactController');

const app = express();

app.use(routes);

app.get('/contacts', ContactController.index);

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
