import { useEffect, useState } from 'react';
import UserImg from '../../../img/Login/undraw_profile_pic_ic5t.png';
import { ErrorMessage } from '../../Custom/ErrorMessage';
import { SingIn } from '../SignIn';
import { SingUp } from '../SignUp';

export const FormLogin = ({ handlerLoader }) => {
    const [login, setLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const handlerSignIn = () => {
        setLogin(true);
        setErrorMessage(null);
    };

    const handlerSignUp = () => {
        setLogin(false);
        setErrorMessage(null);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center mx-auto mb-5 text-black">
                <img className="w-40 mb-5" src={UserImg} alt="avatar" />
                <section className="grid grid-cols-2 gap-x-2 justify-items-center">
                    <button
                        className={`${login && 'text-pink-500'}`}
                        onClick={handlerSignIn}
                        type="button"
                    >
                        Sign In
                    </button>
                    <button
                        className={`${!login && 'text-pink-500'}`}
                        onClick={handlerSignUp}
                        type="button"
                    >
                        Sign Up
                    </button>
                </section>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </div>
            {login ? (
                <SingIn
                    setErrorMessage={setErrorMessage}
                    handlerLoader={handlerLoader}
                />
            ) : (
                <SingUp
                    setErrorMessage={setErrorMessage}
                    handlerLoader={handlerLoader}
                />
            )}
        </div>
    );
};
