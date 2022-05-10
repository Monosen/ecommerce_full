import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserImg from '../../../img/Login/undraw_profile_pic_ic5t.png';

const NavBarAdmin = ({ statusMenu }) => {
    const { user } = useSelector((store) => store.session);

    return (
        <nav
            className={`fixed inset-y-0 z-50 w-48 text-white bg-red-400 min-h-screen transition-all duration-500 ease-in-out py-5 ${
                statusMenu ? 'left-0' : '-left-full'
            }`}
        >
            <div className="h-1/6">
                <img
                    className="object-cover mx-auto rounded-full w-28 h-28"
                    src={UserImg}
                    alt="avatar"
                />
                <h3 className="pb-5 mt-2 text-center capitalize">
                    {user.name}
                </h3>
            </div>
            <div className="flex flex-col items-center w-9/12 mx-auto h-5/6">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'capitalize my-3 border p-2 rounded-lg bg-white text-red-700 border-red-700'
                            : 'capitalize my-3 p-2'
                    }
                    to={`products`}
                >
                    product
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'capitalize mb-3 border p-2 rounded-lg bg-white text-red-700 border-red-700 text-center'
                            : 'capitalize mb-3 p-2 text-center'
                    }
                    to={`productsAdd`}
                >
                    create new product
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'capitalize mb-3 border p-2 rounded-lg bg-white text-red-700 border-red-700'
                            : 'capitalize mb-3 p-2'
                    }
                    to={`/`}
                >
                    home
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBarAdmin;
