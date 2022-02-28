import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import NavBar from "../../components/Custom/NavBar";
import Loader from "../../components/Custom/Loader";

import {
	handlerFillProductInCart,
	handlerProductInCart,
} from "../../redux/actions/cart.action";

const index = () => {
	const [product, setProduct] = useState({});
	const [loader, setLoader] = useState(true);

	const { id } = useParams();
	const { token } = useSelector((store) => store.session);
	const dispatch = useDispatch();

	useEffect(() => {
		const handlerFetchData = async () => {
			try {
				const { data } = await axios.get(
					`http://localhost:4000/api/v1/products/${id}`
				);
				const { product } = data.data;
				setLoader(false);
				console.log(product);
				setProduct(product);
			} catch (error) {
				console.log(error);
			}
		};

		handlerFetchData();
	}, []);

	const handlerAddProduct = () => {
		if (token) {
			dispatch(
				handlerProductInCart({
					name: product.name,
					price: product.price,
					quantity: 1,
					id: product.id,
				})
			);
		} else {
			dispatch(
				handlerFillProductInCart({
					name: product.name,
					price: product.price,
					quantity: 1,
					id: product.id,
				})
			);
		}
	};

	return (
		<>
			<NavBar />
			<div className="container px-4 mx-auto max-w-7xl mt-52">
				<div className="flex flex-col justify-between lg:flex-row">
					{loader ? (
						<div className="absolute inset-0 flex items-center justify-center w-full h-screen">
							<Loader />
						</div>
					) : (
						<>
							<img
								className="w-full max-w-lg mx-auto border rounded-3xl border-grayThree basis-2/4"
								src="https://canary.contestimg.wish.com/api/webimage/5d4b6dcf3f80797d77e0fb7a-4-large.jpg"
								alt="shirt react"
							/>

							<div className="text-main basis-2/5">
								<h1 className="mb-4 text-5xl capitalize">{product?.name}</h1>
								<p className="py-4 mb-4 capitalize border-b text-grayThree border-grayThree">
									{product?.description}
								</p>
								<p className="py-4 mb-4 uppercase border-b text-main border-grayThree">
									qty: <span className="text-grayTwo">{product?.quantity}</span>
								</p>

								<div className="py-4 mb-4 border-b text-grayThree border-grayThree">
									<p className="capitalize">color</p>
								</div>
								<p>${product?.price}</p>

								<p>owner: {product?.user?.name}</p>

								<button
									className="px-3 py-2 text-base text-white bg-red-400 border border-white rounded-lg hover:bg-white hover:border-red-400 hover:text-red-400"
									onClick={handlerAddProduct}
								>
									Add to cart
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default index;
