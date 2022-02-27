import axios from "axios";

import { productInCartTypes } from "../types/cart.types"

export const handlerProductInCart = ({ name, price, quantity, id}) => {
    return async (dispatch) => {
        try {
            axios.get("http://localhost:4000/api/v1/orders/add-product-to-cart", {
                product: {
                    id,
                    quantity
                },
                Headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}`}
            });
            
            dispatch(handlerFillProductInCart({ name, price}))

        } catch (error) {
            console.log(error);
        }
    }
}

export const handlerFillProductInCart = (product) => {
    return {
        type: productInCartTypes.ADD,
        payload: product
    }
}