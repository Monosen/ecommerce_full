import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Redux
import { login } from "../../../store/actions/user.actions";

// Components
import Input from "../../../components/UI/input/input.component";
import Button from "../../../components/UI/button/button.component";
import FormContainer from "../../../components/UI/form-container/form-container.component";

const Login = ({ showSignupForm }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Refs
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const emailValue = emailInputRef.current.value;
		const passwordValue = passwordInputRef.current.value;

		if (
			emailValue.trim().length === 0 ||
			passwordValue.trim().length === 0 ||
			!emailValue.includes("@")
		) {
			return;
		}

		dispatch(login(emailValue, passwordValue));
		navigate("/");
	};

	return (
		<FormContainer>
			<form
				className="flex w-full min-h-screen justify-center flex-col"
				onSubmit={onSubmitHandler}
			>
				<div className="bg-red-400 w-9/12 h-96 mx-auto flex items-center justify-around">
					<div className="bg-white w-96 h-[28rem] relative flex justify-center items-center flex-col px-5 shadow-[0_0_15px_0_rgba(0,0,0,0.2)]">
						<h3 className="text-2xl mb-1">Log In</h3>
						<p className="mb-8">Enter your email and password</p>
						<Input
							label="Email"
							ref={emailInputRef}
							styles="mb-3 w-11/12"
							input={{ id: "email", type: "email" }}
						/>
						<Input
							label="Password"
							ref={passwordInputRef}
							styles="mb-7 w-11/12"
							input={{
								id: "password",
								type: "password",
							}}
						/>

						<Button label="Log In" type="submit" styles="w-24" />
					</div>
					<div className="text-white text-center">
						<h3 className="mb-3">Don't have an account?</h3>
						<Button
							onClick={showSignupForm}
							label="Create account"
							type="button"
							styles="border-white"
						/>
					</div>
				</div>
			</form>
		</FormContainer>
	);
};

export default Login;
