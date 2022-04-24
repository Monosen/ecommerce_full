import { useState } from 'react';
import NavBarAdmin from '../../Dashbord/NavBarAdmin';

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const LayoutDashbord = ({ children, handlerstatusMenu }) => {
    const [statusMenu, setStatusMenu] = useState(true);

    const handlerActiveMenu = () => {
        setStatusMenu(!statusMenu);
        handlerstatusMenu();
    };

    return (
        <>
            <NavBarAdmin statusMenu={statusMenu} />

            <button
                className="fixed z-50 flex items-center justify-center h-6 text-white bg-purple-300 rounded-md bottom-5 left-5 w-7"
                onClick={handlerActiveMenu}
            >
                {statusMenu ? (
                    <BsArrowLeft className="text-5xl" />
                ) : (
                    <BsArrowRight className="text-5xl" />
                )}
            </button>

            <main>{children}</main>
        </>
    );
};

export default LayoutDashbord;
