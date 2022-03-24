import axios from 'axios';

import { productInCartTypes } from '../types/cart.types';

export const handlerProductInCart = ({ name, price, quantity, id, token }) => {
    return async (dispatch) => {
        try {
            await axios.post(
                `${
                    import.meta.env.VITE_APP_API_URL
                }/api/v1/orders/add-product-to-cart`,
                {
                    product: {
                        id,
                        quantity
                    }
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            dispatch(handlerAddProductInCart({ name, price, quantity, id }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const handlerAddProductInCart = (product) => {
    return {
        type: productInCartTypes.ADD,
        payload: product
    };
};

export const handlerSubsProductsInCart = (product) => {
    return {
        type: productInCartTypes.SUB,
        payload: product
    };
};

export const handlerDeleteProductInCart = (product) => {
    return {
        type: productInCartTypes.DELETE,
        payload: product
    };
};

export const handlerAddAllProductsInCart = (product) => {
    return {
        type: productInCartTypes.ADDALL,
        payload: product
    };
};
