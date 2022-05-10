import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import {
    handlerLoginWithEmailAction,
    handlerCreateAccount
} from '../../../redux/actions/login.action';

import UserImg from '../../../img/Login/undraw_profile_pic_ic5t.png';

const FormLogin = ({ handlerLoader }) => {
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

    const handlerLogin = async (values) => {
        handlerLoader();

        const { email, password } = values;

        const user = await dispatch(
            handlerLoginWithEmailAction({ email, password })
        );

        if (user) {
            // navigate('/');
            handlerLoader();
        }

        if (!user) {
            handlerLoader();
        }
    };

    const createNewAccount = async (values) => {
        handlerLoader();

        const { name, email, password } = values;

        const user = await dispatch(
            handlerCreateAccount({ name, email, password })
        );

        if (user) {
            navigate('/');
            handlerLoader();
        }

        if (!user) {
            handlerLoader();
        }
    };

    const signInSchema = yup.object({
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string().required('Required')
    });

    const signUpSchema = yup.object({
        name: yup
            .string()
            .min(1, 'name must have at least 1 character')
            .required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        password: yup
            .string()
            .min(8, 'Password must have at least 6 characters')
            .max(20, 'Password must have a maximum of 20 characters')
            .required('Required')
    });

    return (
        <Formik
            initialValues={
                signIn
                    ? { email: '', password: '' }
                    : { name: '', email: '', password: '' }
            }
            validationSchema={signIn ? signInSchema : signUpSchema}
            onSubmit={(values) =>
                signIn ? handlerLogin(values) : createNewAccount(values)
            }
        >
            {({ errors }) => (
                <Form>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center mx-auto mb-5 text-black">
                            <img
                                className="w-40 mb-5"
                                src={UserImg}
                                alt="avatar"
                            />
                            <section className="grid grid-cols-2 gap-x-2 justify-items-center">
                                <button
                                    className={`${signIn && 'text-pink-500'}`}
                                    onClick={handlerSignIn}
                                    type="button"
                                >
                                    Login
                                </button>
                                <button
                                    className={`${signUp && 'text-pink-500'}`}
                                    onClick={handlerSignUp}
                                    type="button"
                                >
                                    Sing Up
                                </button>
                            </section>
                        </div>
                        {signUp && (
                            <div className="w-full mb-3">
                                <Field
                                    className={`w-full px-3 py-2.5 border-b ${
                                        errors.name
                                            ? 'border-b-red-500'
                                            : 'border-b-black'
                                    } focus:outline-none`}
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                />
                                <ErrorMessage name="name" />
                            </div>
                        )}
                        <div className="w-full mb-3">
                            <Field
                                className={`w-full px-3 py-2.5 border-b ${
                                    errors.email
                                        ? 'border-b-red-500'
                                        : 'border-b-black'
                                } focus:outline-none`}
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                            <ErrorMessage name="email" />
                        </div>
                        <div className="w-full mb-3">
                            <Field
                                className="w-full px-3 py-2.5 mt-2 border-b border-b-black focus:outline-none"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" />
                        </div>
                        <button
                            className="w-5/12 py-2 mt-5 text-xl text-white capitalize bg-red-400"
                            type="submit"
                        >
                            Log In
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormLogin;
