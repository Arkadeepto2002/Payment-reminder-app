const { getClients, addClient } = require('../models/client');

const getAllClients = async (req, res) => {
    try {
        const clients = await getClients();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createClient = async (req, res) => {
    try {
        const newClient = req.body;
        await addClient(newClient);
        res.status(201).json(newClient);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllClients, createClient };

