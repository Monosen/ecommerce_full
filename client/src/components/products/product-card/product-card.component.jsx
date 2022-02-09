import { useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

// Img
import DefaultProducts from "../../../img/products/No_Image_Available.jpg";

// Components
import Button from "../../UI/button/button.component";

const ProductCard = ({ product }) => {
	// Refs
	const token = useSelector((state) => state.user.token);
	const requestedQtyInputRef = useRef();

	const onAddToCartHandler = async () => {
		try {
			const qty = +requestedQtyInputRef.current.value;

			if (qty < 0) return;
			console.log(token);

			// TODO: SEND API REQUEST
			await axios.post(
				`${process.env.REACT_APP_API_URL}/orders/add-product-to-cart`,
				{ product: { id: product.id, quantity: qty } }
				// {
				// 	headers: {
				// 		Authorization: `Bearer ${token}`,
				// 	},
				// } // development
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="border mb-2.5">
			<img
				className="w-full h-44"
				src={DefaultProducts}
				alt="default products img"
			/>
			<div className="px-2 py-1">
				<div>
					<h3>{product.name}</h3>
					<p>Sold by: {product.user.name}</p>
				</div>

				<p>{product.description}</p>
				<div className="flex justify-between items-center rounded mb-2">
					<p>${product.price}</p>
					<input
						className="border py-1.5 px-2 max-w-[5rem]"
						type="number"
						ref={requestedQtyInputRef}
						min="1"
					/>
				</div>
				<h2>{product.id}</h2>
				<Button
					type="button"
					onClick={onAddToCartHandler}
					label="Add to Cart"
					styles="bg-green-500 hover:bg-green-600 text-white rounded-md w-full"
				/>
			</div>
		</div>
	);
};

export default ProductCard;
