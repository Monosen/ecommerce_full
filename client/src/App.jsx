import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Deshboarg from "./pages/Deshboard";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/deshboard" element={<Deshboarg />} />
				<Route path="*" element={<div>error 404</div>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
