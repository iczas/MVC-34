
const express = require('express');

const controller = require('./__controller__');

const path  = require('path');

const api = express();
const database = require('./models/_mock-database_');

api.set('views', path.join(__dirname , 'views'));
api.set('view engine', 'ejs');

api.get('/funcionarios', controller.requererFuncionarios);
api.get('/functionarios?', controller.requererFuncionarioPorCargo);
api.get('/functionarios/:id', controller.requererFuncionarioPorId);

api.get('/items', controller.requererItems);
api.get('/items/:id', controller.requererFuncionarioPorId);


api.listen('1234', () => console.log('Servidor está no ar!'));