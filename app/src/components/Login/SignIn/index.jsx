import { Field, ErrorMessage, Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { handlerLoginWithEmailAction } from '../../../redux/actions/login.action'

export const SingIn = ({ setErrorMessage, handlerLoader }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlerSignIn = async (values) => {
    handlerLoader(true)
    const { email, password } = values

    const errorMessage = await dispatch(
      handlerLoginWithEmailAction({ email, password })
    )

    handlerLoader(false)

    if (!errorMessage) {
      return navigate('/')
    }
    setErrorMessage(errorMessage)
  }

  const signInSchema = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required')
  })

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signInSchema}
      onSubmit={(values) => handlerSignIn(values)}
    >
      {({ errors }) => (
        <Form>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full mb-3'>
              <Field
                className={`w-full px-3 py-2.5 border-b ${
                                    errors.email
                                        ? 'border-b-red-500'
                                        : 'border-b-black'
                                } focus:outline-none`}
                type='text'
                name='email'
                placeholder='Email'
              />
              <ErrorMessage name='email' />
            </div>
            <div className='w-full mb-3'>
              <Field
                className='w-full px-3 py-2.5 mt-2 border-b border-b-black focus:outline-none'
                type='password'
                name='password'
                placeholder='Password'
              />
              <ErrorMessage name='password' />
            </div>
            <button
              className='w-5/12 py-2 mt-5 text-xl text-white capitalize bg-red-400'
              type='submit'
            >
              Log In
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
