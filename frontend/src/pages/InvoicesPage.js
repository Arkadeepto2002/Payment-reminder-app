import React from 'react';
import InvoiceForm from '../components/InvoiceForm';
import InvoiceList from '../components/InvoiceList';

const InvoicesPage = () => {
    return (
        <div>
            <h1>Invoices</h1>
            <InvoiceForm />
            <InvoiceList />
        </div>
    );
};

export default InvoicesPage;
