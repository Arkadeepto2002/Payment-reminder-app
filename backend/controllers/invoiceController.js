 
const { getInvoices, addInvoice, getOverdueInvoices } = require('../models/invoice');

const getAllInvoices = async (req, res) => {
    try {
        const invoices = await getInvoices();
        res.json(invoices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createInvoice = async (req, res) => {
    try {
        const newInvoice = req.body;
        await addInvoice(newInvoice);
        res.status(201).json(newInvoice);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const sendPaymentReminders = async () => {
    try {
        const overdueInvoices = await getOverdueInvoices();
        overdueInvoices.forEach(invoice => {
            // Logic to send email reminders
        });
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = { getAllInvoices, createInvoice, sendPaymentReminders };
