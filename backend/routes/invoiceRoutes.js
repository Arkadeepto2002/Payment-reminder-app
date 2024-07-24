const express = require('express');
const { getAllInvoices, createInvoice } = require('../controllers/invoiceController');
const router = express.Router();

router.route('/').get(getAllInvoices).post(createInvoice);

module.exports = router;

