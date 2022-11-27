const express = require('express');
const router = express.Router();
const login = require('../middleware/login')
const ColaboradorController = require('../controllers/ColaboradorController');

const colaboradorController = new ColaboradorController;

router.post('/login', colaboradorController.login)
router.get('/:id/acesso-bolinho', login.auth, colaboradorController.acessarBolinhos)

module.exports = router;