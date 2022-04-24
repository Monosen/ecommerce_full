import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import LayoutDashbord from '../../components/Layouts/Dashbord';

const Dashbord = () => {
    const [hideNavbar, setHideNavbar] = useState(false);

    const handlerstatusMenu = () => {
        setHideNavbar(!hideNavbar);
    };

    return (
        <LayoutDashbord
            hideNavbar={hideNavbar}
            handlerstatusMenu={handlerstatusMenu}
        >
            <div className={`pt-20 ${!hideNavbar ? 'ml-48' : 'ml-4'} mr-4`}>
                <Outlet />
            </div>

            <div className="pt-20 ml-48 mr-4"></div>
        </LayoutDashbord>
    );
};

export default Dashbord;
