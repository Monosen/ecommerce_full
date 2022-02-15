import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
	return (
		<nav className="absolute flex flex-col justify-center top-9 bg-white border rounded-lg p-2 w-28">
			<NavLink
				className={({ isActive }) =>
					isActive ? "bg-pink-300 text-white text-lg" : "text-black text-lg"
				}
				to={`/login`}
			>
				Login
			</NavLink>

			<NavLink
				className={({ isActive }) =>
					isActive ? "bg-pink-300 text-white" : "text-black"
				}
				to={`/`}
			>
				<button className="text-lg">Loga Up</button>
			</NavLink>
		</nav>
	);
};

export default index;
