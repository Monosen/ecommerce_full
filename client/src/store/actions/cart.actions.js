import axios from "axios";

import { cartActions } from "../slices/cart.slice";

export const fetchCart = () => {
	return async (dispatch) => {
		try {
			// TODO: FETCH DATA FROM API
			const response = await axios.get(
				`/api/v1/orders/get-cart`,
				{
					headers: {
						Authorization: `Bearer ${sessionStorage.getItem("token")}`,
					},
				} // development
			);

			const { products } = response.data.data.cart;

			dispatch(cartActions.getCart({ cartProducts: products }));
		} catch (error) {
			console.log(error);
		}
	};
};
