import React, { useState } from 'react';
import { addInvoice } from '../services/invoiceService';
import Notification from './Notification';
import Spinner from './Spinner';

const InvoiceForm = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const newInvoice = { description, amount, dueDate, status: 'unpaid' };
            await addInvoice(newInvoice);
            setDescription('');
            setAmount('');
            setDueDate('');
            setNotification({ message: 'Invoice added successfully', type: 'success' });
        } catch (error) {
            setNotification({ message: 'Failed to add invoice', type: 'error' });
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Invoice</h2>
            <Notification message={notification.message} type={notification.type} />
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
            <div>
                <label>Due Date</label>
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            </div>
            <button type="submit" disabled={loading}>Add Invoice</button>
            {loading && <Spinner />}
        </form>
    );
};

export default InvoiceForm;
