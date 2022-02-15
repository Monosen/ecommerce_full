import React, { useState } from "react";

const index = () => {
	const [signIn, setSignIn] = useState(true);
	const [signUp, setSignUp] = useState(false);

	const handlerSignIn = () => {
		setSignIn(true);
		setSignUp(false);
	};

	const handlerSignUp = () => {
		setSignIn(false);
		setSignUp(true);
	};

	return (
		<div>
			<div className="container mx-auto px-2 pt-20 sm:px-5 md:px-10 lg:max-w-8xl">
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
					<form action="">
						<div className="flex flex-col items-center">
							{signUp && (
								<input
									className="rounded-lg w-full px-3 py-2.5 mb-2"
									type="text"
									name=""
									placeholder="Name"
								/>
							)}
							<input
								className="rounded-lg w-full px-3 py-2.5"
								type="text"
								name=""
								placeholder="Email"
							/>
							<input
								className="rounded-lg w-full px-3 py-2.5 mt-2"
								type="password"
								name=""
								placeholder="Password"
							/>
							<input
								className="py-2 w-5/12 rounded-lg bg-red-600 text-white mt-5 uppercase text-sm"
								type="submit"
								value={`${signIn ? "Sign In" : "Sign Up"}`}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default index;
