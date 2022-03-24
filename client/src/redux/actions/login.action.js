import axios from 'axios';
import { loginTypes } from '../types/login.types';

export const handlerLoginWithEmailAction = ({ email, password }) => {
    return async (dispatch) => {
        try {
            // console.log(`${userName}, ${email}, ${password}`);
            const { data } = await axios.post(
                `${import.meta.env.VITE_APP_API_URL}/api/v1/users/login`,
                {
                    email,
                    password
                }
            );

            const { token, user } = data.data;

            sessionStorage.setItem('token', token);

            console.log(token);
            console.log(user);
            dispatch(handlerFillUserInfoAction({ user, token }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const handlerFillUserInfoAction = (userInfo) => {
    return {
        type: loginTypes.LOGIN,
        payload: userInfo
    };
};
