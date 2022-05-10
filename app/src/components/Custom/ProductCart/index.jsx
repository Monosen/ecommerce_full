import React from 'react';
import { useDispatch } from 'react-redux';

import { handlerDeleteProductInCart } from '../../../redux/actions/cart.action';

import { IoCloseOutline } from 'react-icons/io5';

const index = ({ id, name, price, quantity }) => {
    const dispatch = useDispatch();

    const handlerDeleteProduct = () => {
        dispatch(handlerDeleteProductInCart({ id, price, quantity }));
    };

    return (
        <div className="flex justify-between px-3 py-2 m-2 bg-pink-300 rounded-lg">
            <p>{name}</p>
            <p>${price}</p>
            <p>{quantity}</p>
            <div>
                <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={handlerDeleteProduct}
                />
            </div>
        </div>
    );
};

export default index;
