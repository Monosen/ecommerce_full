import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import NavBarAdmin from '../../components/Dashbord/NavBarAdmin';
import ButtomHome from '../../components/Custom/ButtonHome';

import { BsArrowRight } from 'react-icons/bs';

const index = () => {
    const [statusMenu, setStatusMenu] = useState(true);

    const handlerActiveMenu = () => {
        setStatusMenu(!statusMenu);
    };

    return (
        <>
            <NavBarAdmin
                statusMenu={statusMenu}
                handlerActiveMenu={handlerActiveMenu}
            />

            <button
                className="fixed flex items-center justify-center h-6 text-white bg-purple-400 rounded-md bottom-5 left-5 w-7"
                onClick={handlerActiveMenu}
            >
                <BsArrowRight className="text-xl" />
            </button>

            <div className="pt-20 ml-48 mr-4">
                <ButtomHome />
                <Outlet />
            </div>

            <div className="pt-20 ml-48 mr-4"></div>
        </>
    );
};

export default index;
