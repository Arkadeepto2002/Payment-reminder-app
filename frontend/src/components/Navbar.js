import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/clients">Clients</Link></li>
                <li><Link to="/invoices">Invoices</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
