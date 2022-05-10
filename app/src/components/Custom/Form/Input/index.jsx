import React from 'react';

const index = ({ type, name, value, onChange, styles }) => {
    return (
        <input
            className={`border px-2 py-3 rounded-lg block ${styles}`}
            type={type}
            placeholder={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default index;
