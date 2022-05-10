import axios from 'axios';
import { loginTypes } from '../types/login.types';

export const handlerLoginWithEmailAction = ({ email, password }) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_APP_API_URL}/api/v1/users/login`,
                {
                    email,
                    password
                }
            );

            const { token, user } = data.data;

            sessionStorage.setItem('token', token);

            dispatch(handlerFillUserInfoAction({ user, token }));

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };
};

export const handlerFillUserInfoAction = (userInfo) => {
    return {
        type: loginTypes.LOGIN,
        payload: userInfo
    };
};

export const handlerCreateAccount = (infoUser) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_APP_API_URL}/api/v1/users`,
                { ...infoUser }
            );

            const { email } = data.data.user;
            const { password } = infoUser;

            return dispatch(handlerLoginWithEmailAction({ email, password }));
        } catch (error) {
            console.log(error);
            return false;
        }
    };
};
