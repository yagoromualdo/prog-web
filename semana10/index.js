//Init: npm init 
//Install Express: npm intall express
//Run: node index.js

//index.js
//Import Express
const express = require('express');
const app = express();

//Definir que será trabalhado as requisições em json
app.use(express.json());

//Endpoint inicial
app.get('/', function(req, res) {
  res.send('Bem-vindo a aula de prog web');
});

//Endpoint de Saída: Lista de Lista
app.get('/list', function(req, res) {
  lists = {
    "lists": [
      {
        "name": "Tarefas",
        "color" : "#030303"
      },
      {
        "name": "Compras",
        "color" : "#020202"
      }
    ]
  };

  return res.json(lists);
});

//Endpoint de entrada: Recebe os dados de uma nova lista.
app.post('/list', (req, res) => {

  //Dados de Entrada
  const name = req.body.name;
  const color = req.body.color;

  //Saida
  return res.json({
    inputs: {
      name: name,
      color: color
    }
  });
});

//Starta o webserver
app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});