import React from "react";
import { NavLink } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

const index = () => {
	return (
		<nav>
			<div className="fixed z-50 text-white bg-blue-600 rounded-lg w-36 left-4 inset-y-5 ">
				<FaUserCircle className="mx-auto mt-3 text-8xl" />
				<h3 className="mt-2 text-center">userName</h3>
				<div>
					<div>
						<NavLink
							to={({ isActive }) => (isActive ? "" : "")}
							onClick={() => {}}
						>
							product
						</NavLink>
					</div>
					<NavLink
						to={({ isActive }) => (isActive ? "" : "")}
						onClick={() => {}}
					>
						add to product
					</NavLink>
					<NavLink
						to={({ isActive }) => (isActive ? "" : "")}
						onClick={() => {}}
					>
						add to product
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default index;
