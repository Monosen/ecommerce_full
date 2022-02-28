import { useState, useEffect } from "react";
import axios from "axios";

import Product from "../../components/Home/Product";
import NavBar from "../../components/Custom/NavBar";
import Hero from "../../components/Home/Hero";

const index = () => {
	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		const handlerFetchData = async () => {
			const { data } = await axios.get(`http://localhost:4000/api/v1/products`);
			const { products } = data.data;
			console.log(products);
			setAllProducts(products);
		};
		handlerFetchData();
	}, []);

	return (
		<>
			<NavBar />

			<Hero />

			<div className="container mx-auto max-w-7xl">
				<div className="text-center">
					<h3 className="mt-24 mb-3 text-5xl">Best Products</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>

				<div className="grid grid-cols-1 mx-auto mt-24 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-24">
					{allProducts?.map((product) => (
						<Product
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.price}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default index;
