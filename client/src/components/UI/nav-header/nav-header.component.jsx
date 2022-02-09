import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

// Redux
import { userActions } from "../../../store/slices/user.slice";

// Icons

import { FaUser, FaShoppingCart } from "react-icons/fa";

const NavHeader = () => {
	const dispatch = useDispatch();

	// Handlers
	const onLogoutHandler = () => {
		dispatch(userActions.logout());
	};

	return (
		<nav className="flex justify-between items-center px-2 py-5">
			<Link to="/">Academlo Shop</Link>
			<div>
				<NavLink className="px-3" to="/add-product">
					Add product
				</NavLink>
				<NavLink className="px-3" to="/cart">
					<FaShoppingCart className="inline" />
				</NavLink>
				<NavLink className="px-3" to="/orders">
					View orders
				</NavLink>
				<NavLink className="px-3" to="/profile">
					<FaUser className="inline" />
				</NavLink>
				<Link onClick={onLogoutHandler} to="/auth">
					Log out
				</Link>
			</div>
		</nav>
	);
};

export default NavHeader;
