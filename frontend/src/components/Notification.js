import React from 'react';

const Notification = ({ message, type }) => {
    if (!message) return null;

    const notificationStyle = {
        padding: '10px',
        color: type === 'error' ? 'red' : 'green',
        border: `1px solid ${type === 'error' ? 'red' : 'green'}`,
        marginBottom: '10px',
    };

    return <div style={notificationStyle}>{message}</div>;
};

export default Notification;

