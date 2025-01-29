const { Router } = require('express');
const ContatoController = require('../controllers/ContatoController');

const router = Router();

router.get('/contatos', ContatoController.listar);
router.get('/contatos/:id', ContatoController.buscarPorId);
router.post('/contatos', ContatoController.criar);
router.put('/contatos/:id', ContatoController.atualizar);
router.delete('/contatos/:id', ContatoController.deletar);

module.exports = router;