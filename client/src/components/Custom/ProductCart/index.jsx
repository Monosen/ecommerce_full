import React from "react";

const index = ({ name, price, quantity }) => {
	return (
		<div className="flex justify-between px-3 py-2 m-2 bg-pink-300 rounded-lg">
			<p>{name}</p>
			<p>${price}</p>
			<p>{quantity}</p>
		</div>
	);
};

export default index;
