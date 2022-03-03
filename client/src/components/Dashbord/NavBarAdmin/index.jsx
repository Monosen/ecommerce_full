import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaUserCircle, FaProductHunt } from 'react-icons/fa';
import { BiAddToQueue } from 'react-icons/bi';
import { GrAddCircle } from 'react-icons/gr';

const index = () => {
    const { user } = useSelector((store) => store.session);

    return (
        <nav>
            <div className="fixed z-50 text-white bg-red-400 rounded-lg w-36 left-4 inset-y-5 ">
                <FaUserCircle className="mx-auto mt-3 text-8xl" />
                <h3 className="pb-5 mt-2 text-center capitalize">
                    {user.name}
                </h3>
                <div className="w-9/12 mx-auto">
                    <div className="flex items-center justify-evenly">
                        <FaProductHunt />
                        <NavLink
                            to={({ isActive }) => (isActive ? '' : '')}
                            onClick={() => {}}
                        >
                            product
                        </NavLink>
                    </div>
                    <div className="flex items-center justify-evenly">
                        <BiAddToQueue />
                        <NavLink
                            to={({ isActive }) => (isActive ? '' : '')}
                            onClick={() => {}}
                        >
                            add to product
                        </NavLink>
                    </div>
                    <div className="flex items-center justify-evenly">
                        <GrAddCircle />
                        <NavLink
                            to={({ isActive }) => (isActive ? '' : '')}
                            onClick={() => {}}
                        >
                            to product
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default index;
