import { productInCartTypes } from '../types/cart.types'

const initialState = {
  cart: [],
  count: 0,
  total: 0
}

export const productCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case productInCartTypes.ADD:
      return {
        ...state,
        cart: state.cart.some(
          (product) => product.id === action.payload.id
        )
          ? state.cart.map((product) => {
            if (product.id === action.payload.id) {
              product.quantity += action.payload.quantity
            }
            return product
          })
          : [...state.cart, action.payload],
        count: state.count + action.payload.quantity,
        total: state.total + +action.payload.price
      }
    case productInCartTypes.SUB:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        count: state.count,
        total: state.total
      }
    case productInCartTypes.DELETE:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.id !== action.payload.id
        ),
        count: state.count - action.payload.quantity,
        total:
                    state.total -
                    +action.payload.price * action.payload.quantity
      }
    case productInCartTypes.ADDALL:
      return {
        ...state,
        cart: action.payload.cart,
        count: state.count,
        total: state.total
      }
    default:
      return state
  }
}
