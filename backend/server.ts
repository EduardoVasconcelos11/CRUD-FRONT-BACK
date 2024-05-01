import express from 'express';
import router from './routerController';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// const corsOptions = {
//   origin: 'http://localhost:4200',
//   optionsSuccessStatus: 200
// }

app.use(cors());

// app.post('/api/createUser', cors(corsOptions), function(req, res) {
//   console.log(req.headers)
//   res.json({ message: 'Permissão CORS concedida para a URL específica.' });
// });

app.use(bodyParser.json());
// Usar as rotas de usuário
app.use('/api', router);

// Porta em que o servidor Express irá ouvir
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
