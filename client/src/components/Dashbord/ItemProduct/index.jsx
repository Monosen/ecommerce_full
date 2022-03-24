import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalEditProduct from '../ModalEditProduct';

import {
    handlerProductDelete,
    handlerProductEdit
} from '../../../redux/actions/product.action';

const index = ({ name, price, id, category, description, quantity, img }) => {
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    const { token } = useSelector((store) => store.session);

    const handlerOpenEditProduct = () => {
        setModal(!modal);
    };

    const handlerEditProduct = () => {
        console.log('hola');
        dispatch(
            handlerProductEdit({
                id,
                name,
                description,
                price,
                quantity,
                category,
                token
            })
        );
    };

    const handlerDeleteProduct = () => {
        dispatch(handlerProductDelete({ id, token }));
    };

    return (
        <>
            <div className="relative flex justify-center w-full max-w-[23rem] shrink-0  bg-white border rounded-lg h-[23rem] drop-shadow-xl m-0">
                <div className="absolute flex flex-col w-9/12 h-full -top-12">
                    <img
                        className="object-cover max-w-[240px] border rounded-lg drop-shadow-lg mx-auto"
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
                            <button
                                className="px-3 py-2 text-base text-white bg-red-400 border border-white rounded-lg hover:bg-white hover:border-red-400 hover:text-red-400"
                                onClick={handlerOpenEditProduct}
                            >
                                Edit
                            </button>

                            <button
                                className="px-3 py-2 text-base text-red-400 border border-red-400 rounded-lg hover:bg-red-400 hover:border-white hover:text-white"
                                onClick={handlerDeleteProduct}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <ModalEditProduct
                    name={name}
                    price={price}
                    category={category}
                    description={description}
                    quantity={quantity}
                    handlerOpenEditProduct={handlerOpenEditProduct}
                    handlerEditProduct={handlerEditProduct}
                />
            )}
        </>
    );
};

export default index;
