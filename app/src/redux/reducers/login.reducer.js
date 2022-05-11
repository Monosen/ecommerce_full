import { loginTypes } from '../types/login.types'

const initialState = {
  user: null,
  token: null
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
    default:
      return state
  }
}
