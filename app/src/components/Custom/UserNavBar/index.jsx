import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const UserNavBar = () => {
    const { token, user } = useSelector((store) => store.session);
    const navigate = useNavigate();

    const handlerExitAccount = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="absolute flex flex-col justify-center p-2 bg-white border rounded-lg top-9 w-28">
            {!token && !user && (
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-pink-300 text-white text-lg px-2'
                            : 'text-black text-lg hover:text-white hover:bg-red-400 px-2 rounded-lg'
                    }
                    to={`/login`}
                >
                    Login
                </NavLink>
            )}

            <p
                className="px-2 mt-1 text-lg rounded-lg hover:text-white hover:bg-red-400"
                onClick={handlerExitAccount}
            >
                Exit
            </p>
        </nav>
    );
};

export default UserNavBar;
