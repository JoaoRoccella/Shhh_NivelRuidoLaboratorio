import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
    // Servindo o arquivo index.html
    res.sendFile('index.html', { root: './public' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
