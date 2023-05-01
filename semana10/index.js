// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web 
// Dev: Yago Romualdo Vieira 
// 01/05/2023 

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const times = [
    {
        id: 1, 
        nome: 'Flamengo',
        estado: 'RJ'
    },
    { 
        id: 2, 
        nome: 'Palmeiras',
        estado: 'SP'
    },
  ];

app.get('/api/futebol/brasileirao/seriea', (req, res) => {
  res.send(times);
});

app.get('/api/futebol/brasileirao/seriea/time/:time_id', (req, res) => {
  const time_id = req.params.time_id;

  const time = {
    id: time_id,
    nome: times[time_id-1].nome,
    estado: times[time_id-1].estado
  };

  res.send(time);
});

app.post('/api/futebol/brasileirao/seriea/time', (req, res) => {
  const time = req.body;

  time.id = Math.floor(Math.random() * 1000);

  res.send(time);
});

app.put('/api/futebol/brasileirao/seriea/time/:time_id', (req, res) => {
  const time_id = req.params.time_id;
  const time = req.body;

  time.id = time_id;

  res.send(time);
});

app.delete('/api/futebol/brasileirao/seriea/time/:time_id', (req, res) => {
  const time_id = req.params.time_id;

  res.send(`Time com id ${time_id} foi deletado`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
