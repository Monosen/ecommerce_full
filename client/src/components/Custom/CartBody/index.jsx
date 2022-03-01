import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import ProductCart from "../ProductCart";

import { handlerAddAllProductsInCart } from "../../../redux/actions/cart.action";

const index = ({ cartNavbar, handlerCartNavBar }) => {
	const dispatch = useDispatch();

	const { token } = useSelector((store) => store.session);
	const { cart } = useSelector((store) => store.cart);

	useEffect(() => {
		const handlerAllProductCart = async () => {
			if (token) {
				const { data } = await axios.get(
					`http://localhost:4000/api/v1/orders/get-cart`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);
				const { cart } = data.data;
				console.log(cart);
				dispatch(handlerAddAllProductsInCart({ cart: cart.products }));
			}
		};
		handlerAllProductCart();
	}, [cartNavbar]);

	return (
		<section
			className={`fixed top-0 right-0 flex w-full h-screen transition-all duration-500 ease-in-out z-50 ${
				cartNavbar ? "right-0" : "-right-full"
			}`}
		>
			<button
				className="w-5/12 h-screen bg-transparent cursor-default"
				onClick={handlerCartNavBar}
			></button>
			<div className="w-7/12 text-black border-l bg-gray-50">
				{cart.map((product, index) => (
					<ProductCart
						key={index}
						name={product?.name}
						price={product?.price}
						quantity={product?.quantity}
					/>
				))}
			</div>
		</section>
	);
};

export default index;
