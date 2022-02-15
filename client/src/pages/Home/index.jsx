import React from "react";

import NavBar from "../../components/Custom/NavBar";
import Hero from "../../components/Home/Hero";

const index = () => {
	return (
		<>
			<NavBar />

			<Hero />

			<div className="text-center">
				<h3 className="text-5xl mt-24 mb-3">Best Products</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>

			<div className="my-24 flex justify-center">
				<div className="relative w-96 h-[25rem] bg-white rounded-lg flex flex-col items-center drop-shadow-xl border">
					<img
						className="absolute w-10/12 -top-12 rounded-lg drop-shadow-lg border"
						src="https://canary.contestimg.wish.com/api/webimage/5d4b6dcf3f80797d77e0fb7a-4-large.jpg"
						alt="react shirt"
					/>

					<h5 className="mt-72 text-2xl">React shirt</h5>
					<p>$35.000</p>
				</div>
			</div>
		</>
	);
};

export default index;
