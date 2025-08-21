const express = require('express');
const app = express();
const asyncHandler = require('express-async-handler');

// Código de tratamento de erros no middleware de rota
// app.get('/users/:id', async (req, res) => {
//  try {
//      const user = await getUserById(req.params.id);
//      res.json(user);
//  } catch (error) {
//      res.status(500).json({ mensagem: 'Erro ao obter usuário' });
//  }
// });

// Código de tratamento de erros no middleware de erro global
// app.get('/users/:id', async (req, res) => {
//      const user = await getUserById(req.params.id);
//      res.json(user);
// });

// app.use((error, req, res, next) => {
//    res.status(500).json({ mensagem: 'Ocorreu um erro inesperado' });
// });

//Código de tratamento de erros com o pacote express-async-handler
app.get(
   '/',
   asyncHandler(async (req, res, next) => {
   throw new Error('erro de teste');
}));

// Manipulador de erros do Express
app.use((err, req, res, next) => {
   console.error(err);
   res.status(500).send('Ocorreu um erro no servidor!');
});

app.listen(3000, () => {
    console.log('Servidor inciado na porta http://localhost:3000');
});