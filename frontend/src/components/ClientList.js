import React, { useEffect, useState } from 'react';
import { getClients } from '../services/clientService';
import Spinner from './Spinner';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const clientsData = await getClients();
                setClients(clientsData);
            } catch (error) {
                console.error("Failed to fetch clients", error);
            }
            setLoading(false);
        };

        fetchClients();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <h2>Clients</h2>
            <ul>
                {clients.map(client => (
                    <li key={client._id}>{client.name} - {client.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClientList;
