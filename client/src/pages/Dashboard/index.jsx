import React from "react";

import NavBarAdmin from "../../components/Dashbord/NavBarAdmin";

const index = () => {
	return (
		<div className="w-full h-6/6 bg-grayTwo">
			<NavBarAdmin />

			<div className="absolute inset-x-0 top-0 z-0 h-40 bg-blue-500"></div>
		</div>
	);
};

export default index;
