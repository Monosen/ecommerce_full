import React from 'react';

const index = ({ src, name }) => {
    return (
        <div className="overflow-hidden shrink-0 snap-center">
            <img
                className="object-cover w-6/12 mx-auto border shadow-lg rounded-3xl"
                src={src}
                alt={name}
            />
        </div>
    );
};

export default index;
