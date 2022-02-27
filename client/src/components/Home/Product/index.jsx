import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
	handlerProductInCart,
	handlerFillProductInCart,
} from "../../../redux/actions/cart.action";

const index = ({ name, price, id }) => {
	const dispatch = useDispatch();
	const { token } = useSelector((store) => store.session);

	const handlerAddProduct = () => {
		if (token) {
			dispatch(handlerProductInCart({ name, price, quantity: 1, id }));
		} else {
			dispatch(handlerFillProductInCart({ name, price, quantity: 1, id }));
		}
	};

	return (
		<div className="relative w-96 h-[25rem] bg-white rounded-lg flex flex-col items-center drop-shadow-xl border">
			<img
				className="absolute w-10/12 border rounded-lg -top-12 drop-shadow-lg"
				src="https://canary.contestimg.wish.com/api/webimage/5d4b6dcf3f80797d77e0fb7a-4-large.jpg"
				alt="react shirt"
			/>

			<h5 className="text-2xl mt-72">{name}</h5>
			<p>${price}</p>
			<button className="text-xl border" onClick={handlerAddProduct}>
				Add to cart
			</button>
			<Link to={`/product/${id}`}>More</Link>
		</div>
	);
};

export default index;
