import React, { useEffect, useState } from 'react';
import { getInvoices } from '../services/invoiceService';
import Spinner from './Spinner';

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const invoicesData = await getInvoices();
                setInvoices(invoicesData);
            } catch (error) {
                console.error("Failed to fetch invoices", error);
            }
            setLoading(false);
        };

        fetchInvoices();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <h2>Invoices</h2>
            <ul>
                {invoices.map(invoice => (
                    <li key={invoice._id}>
                        {invoice.description} - ${invoice.amount} - {invoice.dueDate} - {invoice.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvoiceList;
