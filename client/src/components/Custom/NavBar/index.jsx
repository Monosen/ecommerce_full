import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import UserNavBar from "../UserNavBar";

import { RiShoppingCartLine, RiUser3Fill } from "react-icons/ri";

const index = () => {
	const [userNavbar, setUserNavbar] = useState(false);

	const handlerUserNavBar = () => {
		setUserNavbar(!userNavbar);
		console.log(userNavbar);
	};

	return (
		<nav className="py-5 fixed w-full top-0 bg-white">
			<div className="container mx-auto px-4 sm:px-10 md:px-20 lg:max-w-6xl">
				<div className="flex justify-between items-center">
					<h2 className="capitalize text-2xl">MonoShop</h2>
					<ul>
						<li className="inline-block">
							<NavLink
								className={({ isActive }) =>
									isActive ? "text-red-400 px-4 py-3" : "px-4 py-3 text-black"
								}
								to={`/`}
							>
								Inicio
							</NavLink>
						</li>
						<li className="inline-block">
							<NavLink
								className={({ isActive }) =>
									isActive ? "text-red-400 px-4 py-3" : "px-4 py-3 text-black"
								}
								to={`/deshboard`}
							>
								Deshbord
							</NavLink>
						</li>
					</ul>
					<div className="flex w-14 justify-between">
						<RiShoppingCartLine className="text-lg" />
						<button
							className="relative flex justify-center"
							onClick={handlerUserNavBar}
						>
							<RiUser3Fill className="text-lg" />
							{userNavbar && <UserNavBar />}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default index;
