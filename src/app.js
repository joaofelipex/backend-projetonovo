const express = require('express');
const cors = require('cors');
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'felipe',
  password: '123456',
  port: 5432,
})
const app = express();

app.use(cors());
app.use(express.json());

app.get('/contato', (request, response) => {
    let query = "select * from contato;"
    pool.query(query).then(result => response.json(result.rows))
})

app.get('/contato/:id', (request, response) => {
    let id = request.params.id
    let query = "select * from contato where id= " + id
    console.log(query)
    pool.query(query).then(result => response.json(result.rows))
})

app.post('/contato', (request, response) => {
    let contato = request.body
    let nome = contato.nome
    let sobrenome = contato.sobrenome
    let telefone = contato.telefone
    let email = contato.email
    let salario = contato.salario
    let query =  `INSERT INTO contato 
    (nome, sobrenome, telefone, email, salario)  
    VALUES ('${nome}', '${sobrenome}', '${telefone}', '${email}', '${salario}');`
    pool.query(query).then(result => response.send('Contato cadastrado com sucesso')) 
})

app.delete('/contato/:id', (request, response) => {
    let id = request.params.id
    let query = "delete from contato where id= " + id
    console.log(query)
    pool.query(query).then(result => response.json(result.rows))
})

app.put('/contato/:id', (request, response) => {
    let id = request.params.id
    let contato = request.body
    let nome = contato.nome
    let sobrenome = contato.sobrenome
    let telefone = contato.telefone
    let email = contato.email
    let salario = contato.salario

    let query = `update contato set 
    nome ='${nome}', 
    sobrenome ='${sobrenome}', 
    telefone ='${telefone}', 
    email ='${email}', 
    salario ='${salario}' where id = ${id}`
    pool.query(query).then(result => response.send('Contato alterado com sucesso')) 
})

app.listen(3010, () => {
    console.log('Servidor rodando na porta 3000');
});