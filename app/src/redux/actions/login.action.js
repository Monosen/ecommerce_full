import axios from 'axios'
import { loginTypes } from '../types/login.types'

export const handlerLoginWithEmailAction = (userInfo) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/v1/users/login', {
        ...userInfo
      })

      const { token, user } = data.data

      sessionStorage.setItem('token', token)

      dispatch(handlerFillUserInfoAction({ user, token }))
    } catch (error) {
      console.log(error)
      return 'Credentials are not valid'
    }
  }
}

export const handlerFillUserInfoAction = (userInfo) => {
  return {
    type: loginTypes.LOGIN,
    payload: userInfo
  }
}

export const handlerCreateAccount = (infoUser) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/v1/users', { ...infoUser })

      const { email } = data.data.user
      const { password } = infoUser

      dispatch(handlerLoginWithEmailAction({ email, password }))
    } catch (error) {
      console.log(error)
      return 'Credentials are not valid'
    }
  }
}
