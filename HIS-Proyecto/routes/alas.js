const express = require('express');
const router = express.Router();
const AlaController = require('../controllers/AlaController');

router.get('/', AlaController.index);

module.exports = router;