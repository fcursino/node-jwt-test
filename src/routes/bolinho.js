const express = require('express');
const BolinhoController = require('../controllers/BolinhoController');
const login = require('../middleware/login');
const router = express.Router();

const bolinhoController = new BolinhoController;

router.post('/reposicao-estoque', 
login.auth,
bolinhoController.reporEstoque);

module.exports = router;