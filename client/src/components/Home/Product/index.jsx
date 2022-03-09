import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    handlerProductInCart,
    handlerFillProductInCart
} from '../../../redux/actions/cart.action';

const index = ({ name, price, id, img, userProduct }) => {
    const dispatch = useDispatch();
    const { token, user } = useSelector((store) => store.session);

    const handlerAddProduct = () => {
        if (token) {
            dispatch(
                handlerProductInCart({ name, price, quantity: 1, id, token })
            );
        } else {
            dispatch(
                handlerFillProductInCart({ name, price, quantity: 1, id })
            );
        }
    };

    return (
        <div className="relative flex justify-center w-full max-w-[23rem] bg-white border rounded-lg h-[25rem] drop-shadow-xl">
            <div className="absolute flex flex-col w-9/12 h-full -top-12">
                <img
                    className="border rounded-lg drop-shadow-lg"
                    src={`${
                        img.includes('http')
                            ? img
                            : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                    }`}
                    alt="react shirt"
                />
                <div className="flex flex-col h-full text-center justify-evenly">
                    <h5 className="text-2xl">{name}</h5>
                    <p>${price}</p>
                    <div className="flex items-center w-full justify-evenly">
                        {user?.id !== userProduct?.id && (
                            <button
                                className="px-3 py-2 text-base text-white bg-red-400 border border-white rounded-lg hover:bg-white hover:border-red-400 hover:text-red-400"
                                onClick={handlerAddProduct}
                            >
                                Add to cart
                            </button>
                        )}
                        <Link
                            className="px-3 py-2 text-red-400 border border-red-400 rounded-lg hover:bg-red-400 hover:border-white hover:text-white"
                            to={`/product/${id}`}
                        >
                            More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
