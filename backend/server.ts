import express from 'express';
import router from './routerController';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
// Usar as rotas de usuário
app.use('/api', router);

// Porta em que o servidor Express irá ouvir
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
