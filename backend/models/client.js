const { client } = require('../config/db');
const collection = client.db('paymentReminderDB').collection('clients');

const getClients = async () => {
    return await collection.find().toArray();
};

const addClient = async (clientData) => {
    return await collection.insertOne(clientData);
};

module.exports = { getClients, addClient };

