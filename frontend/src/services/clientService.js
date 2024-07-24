const API_URL = 'http://localhost:5000/api/clients';

export const getClients = async () => {
    const response = await fetch(API_URL);
    const clients = await response.json();
    return clients;
};

export const addClient = async (client) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(client),
    });
    const newClient = await response.json();
    return newClient;
};
