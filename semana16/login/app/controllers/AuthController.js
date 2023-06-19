const { User } = require('../models');

class AuthController {
  constructor() { }

  async login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          username,
          password,
        },
      });

      if (user) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }

  async createUser(username, password) {
    try {
      const user = await User.create({ username, password });
      console.log('Novo usuário criado:', user.username);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  }

}

module.exports = AuthController;

