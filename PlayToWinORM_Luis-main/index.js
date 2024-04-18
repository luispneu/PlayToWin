const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const Usuario = require('./models/usuario');
const Jogo = require('./models/Jogo');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas para inserção de usuários e jogos...

sequelize.sync({ force: true }) // Se quiser recriar as tabelas a cada reinício do servidor, usar { force: true }
  .then(() => {
    console.log('Tabelas sincronizadas.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar tabelas:', err);
  });

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
