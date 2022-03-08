import React from 'react';
import { Link } from 'react-router-dom';

const index = ({ name, price, id, img }) => {
    return (
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
                            // onClick={handlerAddProduct}
                        >
                            Edit
                        </button>

                        <Link
                            className="px-3 py-2 text-red-400 border border-red-400 rounded-lg hover:bg-red-400 hover:border-white hover:text-white"
                            to={`/product/${id}`}
                        >
                            Delete
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
