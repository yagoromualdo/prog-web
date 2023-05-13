const express = require('express');
const TimeController = require('./app/controllers/TimeController');
const EstadoController = require('./app/controllers/EstadoController');

const timeController = new TimeController();
const estadoController = new EstadoController();
const app = express();


app.use(express.json());

app.get('/', function(req, res) {
  res.send('Bem-vindo!');
});

app.get('/time', (req, res) => timeController.findAll(req, res));
app.post('/time', (req, res) => timeController.create(req, res));
app.get('/time/:id', (req, res) => timeController.findById(req, res));
app.put('/time/:id', (req, res) => timeController.update(req, res));
app.delete('/time/:id', (req, res) => timeController.delete(req, res));

app.get('/estado', (req, res) => estadoController.findAll(req, res));
app.post('/estado', (req, res) => estadoController.create(req, res));
app.get('/estado/:id', (req, res) => estadoController.findById(req, res));
app.put('/estado/:id', (req, res) => estadoController.update(req, res));
app.delete('/estado/:id', (req, res) => estadoController.delete(req, res));


app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});

