const connection = require('../config/database');

class ContatoController {
    async listar(req, res) {
        const contatoRepository = (await connection).getRepository("Contato");
        const contatos = await contatoRepository.find();
        return res.json(contatos);
    }

    async criar(req, res) {
        const contatoRepository = (await connection).getRepository("Contato");
        const contato = await contatoRepository.save(req.body);
        return res.json(contato);
    }

    async buscarPorId(req, res) {
        const contatoRepository = (await connection).getRepository("Contato");
        const contato = await contatoRepository.findOne(req.params.id);
        return res.json(contato);
    }

    async atualizar(req, res) {
        const contatoRepository = (await connection).getRepository("Contato");
        const contato = await contatoRepository.update(req.params.id, req.body);
        return res.json(contato);
    }

    async deletar(req, res) {
        const contatoRepository = (await connection).getRepository("Contato");
        await contatoRepository.delete(req.params.id);
        return res.json({ message: "Contato removido com sucesso!" });
    }
}

module.exports = new ContatoController();