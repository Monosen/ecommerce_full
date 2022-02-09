import axios from "axios";

import { userActions } from "../slices/user.slice";

export const login = (email, password) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(`/api/v1/users/login`, {
				email,
				password,
			});

			const { user, token } = response.data.data;
			sessionStorage.setItem("token", token);

			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			dispatch(userActions.login({ user: user, token }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const signup = (userData) => {
	return async (dispatch) => {
		try {
			dispatch(userActions.signup({ userData }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const checkUserAuth = (token) => {
	return (dispatch) => {
		dispatch(userActions.checkAuth({ userAuth: !!token, token }));
	};
};
