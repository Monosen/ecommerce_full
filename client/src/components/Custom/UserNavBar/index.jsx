import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const index = () => {
    const navigate = useNavigate();

    const handlerExitAccount = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="absolute flex flex-col justify-center p-2 bg-white border rounded-lg top-9 w-28">
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? 'bg-pink-300 text-white text-lg'
                        : 'text-black text-lg'
                }
                to={`/login`}
            >
                Login
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    isActive ? 'bg-pink-300 text-white' : 'text-black'
                }
                to={`/`}
            >
                Loga Up
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    isActive ? 'bg-pink-300 text-white' : 'text-black'
                }
                to={`/`}
                onClick={handlerExitAccount}
            >
                Exit
            </NavLink>
        </nav>
    );
};

export default index;
