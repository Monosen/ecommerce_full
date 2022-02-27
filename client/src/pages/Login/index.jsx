import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handlerLoginWithEmailAction } from "../../redux/actions/login.action";

const index = () => {
	const [value, setValue] = useState({ userName: "", email: "", password: "" });
	const [signIn, setSignIn] = useState(true);
	const [signUp, setSignUp] = useState(false);
	
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const handlerSignIn = () => {
		setSignIn(true);
		setSignUp(false);
	};

	const handlerSignUp = () => {
		setSignIn(false);
		setSignUp(true);
	};

	const handlerLogin = (e) => {
		e.preventDefault();

		if (signIn && !signUp) {
			dispatch(handlerLoginWithEmailAction(value));
		}

		if (!signIn && signUp) {
			console.log("create account");
		}

		navigate("/")
	};

	return (
			<div className="container px-2 pt-20 mx-auto sm:px-5 md:px-10 lg:max-w-8xl">
				<div className="w-96 mx-auto bg-pink-300 min-h-[70vh] px-5 rounded-lg text-center flex flex-col justify-center items-center">
					<div className="flex justify-between w-56 mb-5">
						<button
							className={`${signIn && "text-white"}`}
							onClick={handlerSignIn}
						>
							Sign In
						</button>
						<button
							className={`${signUp && "text-white"}`}
							onClick={handlerSignUp}
						>
							Sing Up
						</button>
					</div>
					<form action="" onSubmit={handlerLogin}>
						<div className="flex flex-col items-center">
							{signUp && (
								<input
									className="rounded-lg w-full px-3 py-2.5 mb-2"
									type="text"
									name=""
									placeholder="Name"
									onChange={(e) =>
										setValue({ ...value, userName: e.target.value })
									}
								/>
							)}
							<input
								className="rounded-lg w-full px-3 py-2.5"
								type="text"
								name=""
								placeholder="Email"
								onChange={(e) => setValue({ ...value, email: e.target.value })}
							/>
							<input
								className="rounded-lg w-full px-3 py-2.5 mt-2"
								type="password"
								name=""
								placeholder="Password"
								onChange={(e) =>
									setValue({ ...value, password: e.target.value })
								}
							/>
							<input
								className="w-5/12 py-2 mt-5 text-sm text-white uppercase bg-red-600 rounded-lg"
								type="submit"
								value={`${signIn ? "Sign In" : "Sign Up"}`}
							/>
						</div>
					</form>
				</div>
			</div>
	);
};

export default index;
