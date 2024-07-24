const express = require('express');
const { getAllClients, createClient } = require('../controllers/clientController');
const router = express.Router();

router.route('/').get(getAllClients).post(createClient);

module.exports = router;
