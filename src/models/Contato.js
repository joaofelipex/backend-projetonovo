const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: "Contato",
    tableName: "contatos",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        nome: {
            type: "varchar"
        },
        telefone: {
            type: "varchar"
        },
        email: {
            type: "varchar"
        }
    }
});