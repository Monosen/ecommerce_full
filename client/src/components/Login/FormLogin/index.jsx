import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import {
    handlerLoginWithEmailAction,
    handlerCreateAccount
} from '../../../redux/actions/login.action';

import UserImg from '../../../img/Login/undraw_profile_pic_ic5t.png';

const index = () => {
    const [signIn, setSignIn] = useState(true);
    const [signUp, setSignUp] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerSignIn = () => {
        setSignIn(true);
        setSignUp(false);
    };

    const handlerSignUp = () => {
        setSignIn(false);
        setSignUp(true);
    };

    const handlerLogin = (e) => {
        const { name, email, password } = e;

        if (signIn && !signUp) {
            dispatch(handlerLoginWithEmailAction({ email, password }));
            navigate('/');
        }

        if (!signIn && signUp) {
            dispatch(handlerCreateAccount({ name, email, password }));
            navigate('/');
        }
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validate={(value) => {
                let errors = {};

                if (!signIn) {
                    // name validation
                    if (!value.name) {
                        errors.name = 'Please enter a name';
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.name)) {
                        errors.name =
                            'The name can only contain letters and spaces';
                    }
                }

                // email validation
                if (!value.email) {
                    errors.email = 'Please enter a mail';
                } // else if (
                //     !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                //         value.email
                //     )
                // ) {
                //     errors.email =
                //         'Mail can only contain letters, numbers, periods, hyphens and underscores';
                // }

                return errors;
            }}
            onSubmit={(e) => handlerLogin(e)}
        >
            {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center">
                        <header className="flex flex-col items-center mx-auto mb-5 text-black">
                            <img
                                className="w-40 mb-5"
                                src={UserImg}
                                alt="avatar"
                            />
                            <section className="grid grid-cols-2 gap-x-2 justify-items-center">
                                <button
                                    className={`${signIn && ''}`}
                                    onClick={handlerSignIn}
                                    type="button"
                                >
                                    Login
                                </button>
                                <button
                                    className={`${signUp && ''}`}
                                    onClick={handlerSignUp}
                                    type="button"
                                >
                                    Sing Up
                                </button>
                            </section>
                        </header>

                        {signUp && (
                            <div className="w-full mb-3">
                                <input
                                    className={`w-full px-3 py-2.5 border-b ${
                                        errors.name
                                            ? 'border-b-red-500'
                                            : 'border-b-black'
                                    } focus:outline-none`}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors?.name && (
                                    <p className="pt-2 text-red-600 capitalize">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                        )}
                        <div className="w-full mb-3">
                            <input
                                className={`w-full px-3 py-2.5 border-b ${
                                    errors.email
                                        ? 'border-b-red-500'
                                        : 'border-b-black'
                                } focus:outline-none`}
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors?.email && (
                                <p className="pt-2 text-red-600 capitalize">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className="w-full mb-3">
                            <input
                                className="w-full px-3 py-2.5 mt-2 border-b border-b-black focus:outline-none"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <button
                            className="w-5/12 py-2 mt-5 text-xl text-white capitalize bg-purple-800"
                            type="submit"
                        >
                            {signIn ? 'Log In' : 'Sign Up'}
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default index;
