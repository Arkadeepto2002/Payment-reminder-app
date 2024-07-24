import React, { useState } from 'react';
import { addClient } from '../services/clientService';
import Notification from './Notification';
import Spinner from './Spinner';

const ClientForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const newClient = { name, email };
            await addClient(newClient);
            setName('');
            setEmail('');
            setNotification({ message: 'Client added successfully', type: 'success' });
        } catch (error) {
            setNotification({ message: 'Failed to add client', type: 'error' });
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Client</h2>
            <Notification message={notification.message} type={notification.type} />
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit" disabled={loading}>Add Client</button>
            {loading && <Spinner />}
        </form>
    );
};

export default ClientForm;

