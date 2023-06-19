const express = require('express');
const AuthController = require('./app/controllers/AuthController');
const authController = new AuthController();
const app = express();


app.use(express.json());

app.post('/login', (req, res) => authController.login(req, res));

async function initializeApp() {
  try {
    await authController.createUser('usuario1', 'senha1');
    await authController.createUser('usuario2', 'senha2');

    app.listen(3000, function () {
      console.log('Servidor rodando na porta 3000');
    });
  } catch (error) {
    console.error('Erro ao inicializar a aplicação:', error);
  }
}

initializeApp();

