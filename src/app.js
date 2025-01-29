const express = require('express');
const cors = require('cors');
const contatosRoutes = require('./routes/contatos');

const app = express();

app.use(cors());
app.use(express.json());
app.use(contatosRoutes);

app.get('/', (request, response) => {
    response.send('TESTE')
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});