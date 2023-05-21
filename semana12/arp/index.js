const express = require('express');
const AgendaController = require('./app/controllers/AgendaController');
const PacienteController = require('./app/controllers/PacienteController');

const agendaController = new AgendaController();
const pacienteController = new PacienteController();
const app = express();


app.use(express.json());

app.get('/', function(req, res) {
  res.send('Bem-vindo!');
});

app.get('/agenda', (req, res) => agendaController.findAll(req, res));
app.post('/agenda', (req, res) => agendaController.create(req, res));
app.get('/agenda/:id', (req, res) => agendaController.findById(req, res));
app.put('/agenda/:id', (req, res) => agendaController.update(req, res));
app.delete('/agenda/:id', (req, res) => agendaController.delete(req, res));

app.get('/paciente', (req, res) => pacienteController.findAll(req, res));
app.post('/paciente', (req, res) => pacienteController.create(req, res));
app.get('/paciente/:id', (req, res) => pacienteController.findById(req, res));
app.put('/paciente/:id', (req, res) => pacienteController.update(req, res));
app.delete('/paciente/:id', (req, res) => pacienteController.delete(req, res));


app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});

