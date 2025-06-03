const express = require('express');
const router = express.Router();
const PacienteController = require('../controllers/PacienteController');

router.get('/', PacienteController.index);
router.get('/create', PacienteController.create);
router.post('/', PacienteController.store);
router.get('/:id', PacienteController.show);

module.exports = router;