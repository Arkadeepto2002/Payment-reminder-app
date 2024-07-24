const { client } = require('../config/db');
const collection = client.db('paymentReminderDB').collection('invoices');

const getInvoices = async () => {
    return await collection.find().toArray();
};

const addInvoice = async (invoiceData) => {
    return await collection.insertOne(invoiceData);
};

const getOverdueInvoices = async () => {
    const currentDate = new Date();
    return await collection.find({ dueDate: { $lt: currentDate }, status: 'unpaid' }).toArray();
};

module.exports = { getInvoices, addInvoice, getOverdueInvoices };

