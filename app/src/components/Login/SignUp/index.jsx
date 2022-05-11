import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { handlerCreateAccount } from '../../../redux/actions/login.action';

export const SingUp = ({ setErrorMessage, handlerLoader }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createNewAccount = async (values) => {
        handlerLoader(true);
        const { name, email, password } = values;

        const errorMessage = await dispatch(
            handlerCreateAccount({ name, email, password })
        );

        handlerLoader(false);

        if (!errorMessage) {
            return navigate('/');
        }

        setErrorMessage();
    };

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
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={signUpSchema}
            onSubmit={(values) => createNewAccount(values)}
        >
            {({ errors }) => (
                <Form>
                    <div className="flex flex-col items-center justify-center">
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
                            Sign In
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
