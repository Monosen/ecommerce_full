import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';

const index = ({ styles }) => {
    const navigate = useNavigate();

    const handlerHome = () => {
        navigate('/');
    };

    return (
        <div
            className={`flex items-center justify-center h-6 text-white bg-purple-400 rounded-md w-7 ${styles}`}
        >
            <BsArrowLeft onClick={handlerHome} />
        </div>
    );
};

export default index;
