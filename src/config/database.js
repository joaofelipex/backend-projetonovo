const { createConnection } = require('typeorm');

const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "felipe",
    synchronize: true,
    entities: [
        require('../models/Contato')
    ]
});

module.exports = connection;