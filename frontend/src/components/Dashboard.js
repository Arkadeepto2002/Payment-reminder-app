import React from 'react';
import ClientList from './ClientList';
import InvoiceList from './InvoiceList';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ClientList />
            <InvoiceList />
        </div>
    );
};

export default Dashboard;
