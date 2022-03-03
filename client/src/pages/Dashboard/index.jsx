import React from 'react';

import NavBarAdmin from '../../components/Dashbord/NavBarAdmin';
import FormAddProduct from '../../components/Dashbord/FormAddProduct';
import UserProducts from '../../components/Dashbord/UserProducts';

const index = () => {
    return (
        <div className="w-full h-screen">
            <NavBarAdmin />

            <span className="absolute inset-x-0 top-0 h-40 bg-red-600 -z-10"></span>

            <div className="pt-20 ml-48 mr-4">
                <FormAddProduct />
            </div>

            <div className="pt-20 ml-48 mr-4">
                <div className="bg-blue-300 min-h-[23rem] rounded-lg">
                    <UserProducts />
                </div>
            </div>
        </div>
    );
};

export default index;
