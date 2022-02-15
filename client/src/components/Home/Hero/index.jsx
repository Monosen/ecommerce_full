import React from "react";

import {
	AiOutlineFacebook,
	AiOutlineTwitter,
	AiOutlineInstagram,
} from "react-icons/ai";

const index = () => {
	return (
		<header>
			<div className="container mx-auto px-2 pt-20 sm:px-5 md:px-10 lg:max-w-8xl">
				<div className="bg-red-400 min-h-[65vh] rounded-3xl flex justify-center items-center">
					<AiOutlineFacebook />
					<AiOutlineTwitter />
					<AiOutlineInstagram />
				</div>
			</div>
		</header>
	);
};

export default index;
