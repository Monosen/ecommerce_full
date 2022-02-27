import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboarg from "./pages/Dashboard";
import ProductInfo from "./pages/ProductInfo";

const App = () => {
	const { token } = useSelector((store) => store.session);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/dashboard"
					element={token ? <Dashboarg /> : <Navigate to={"/"} />}
				/>
				<Route path="/product/:id" element={<ProductInfo />} />
				<Route path="*" element={<div>error 404</div>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
