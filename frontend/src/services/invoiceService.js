const API_URL = 'http://localhost:5000/api/invoices';

export const getInvoices = async () => {
    const response = await fetch(API_URL);
    const invoices = await response.json();
    return invoices;
};

export const addInvoice = async (invoice) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoice),
    });
    const newInvoice = await response.json();
    return newInvoice;
};
