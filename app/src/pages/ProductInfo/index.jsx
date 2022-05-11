import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import NavBar from '../../components/Custom/NavBar';
import Loader from '../../components/Custom/Loader';
import ImgProduct from '../../components/ProductInfo/ImgProduct';
import Footer from '../../components/Custom/Footer';

import {
    handlerAddProductInCart,
    handlerProductInCart
} from '../../redux/actions/cart.action';

const ProductInfo = () => {
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);

    const { id } = useParams();
    const { token, user } = useSelector((store) => store.session);
    const dispatch = useDispatch();

    useEffect(() => {
        const handlerFetchData = async () => {
            try {
                const { data } = await axios.get(`/api/v1/products/${id}`);
                const { product } = data.data;
                setLoader(false);
                console.log(product);
                setProduct(product);
            } catch (error) {
                console.log(error);
            }
        };

        handlerFetchData();
    }, []);

    const handlerAddProduct = () => {
        if (token) {
            dispatch(
                handlerProductInCart({
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    id: product.id
                })
            );
        } else {
            dispatch(
                handlerAddProductInCart({
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    id: product.id
                })
            );
        }
    };

    return (
        <>
            <NavBar />
            <div className="container px-4 mx-auto max-w-7xl mt-52">
                <div className="flex flex-col justify-between lg:flex-row">
                    {loader ? (
                        <div className="absolute inset-0 flex items-center justify-center w-full h-screen">
                            <Loader />
                        </div>
                    ) : (
                        <>
                            <div className="basis-3/6">
                                <img
                                    className="w-full max-w-lg mx-auto border rounded-3xl border-grayThree"
                                    src={`${
                                        product?.productImgs
                                            ? product?.productImgs[0]?.imgPath
                                            : ''
                                    }`}
                                    alt="shirt react"
                                />

                                <div className="flex w-10/12 gap-4 p-4 mx-auto overflow-x-auto snap-x">
                                    {product?.productImgs?.map((img) => (
                                        <ImgProduct
                                            src={img.imgPath}
                                            name={product.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="text-main basis-3/6">
                                <h1 className="mb-4 text-5xl capitalize">
                                    {product?.name}
                                </h1>
                                <p className="py-4 mb-4 capitalize border-b text-grayThree border-grayThree">
                                    {product?.description}
                                </p>
                                <p className="py-4 mb-4 uppercase border-b text-main border-grayThree">
                                    qty:
                                    <span className="text-grayTwo">
                                        {product?.quantity}
                                    </span>
                                </p>

                                <div className="py-4 mb-4 border-b border-grayThree">
                                    <p className="capitalize">color:</p>
                                </div>
                                <p className="py-4 mb-10 capitalize border-b border-grayThree">
                                    owner:{' '}
                                    <span className="text-grayTwo">
                                        {product?.user?.name}
                                    </span>
                                </p>
                                <p className="mb-5 text-5xl font-bold">
                                    ${product?.price}
                                </p>

                                {product?.user?.id !== user?.id && (
                                    <button
                                        className="px-4 py-3 text-base text-white uppercase bg-red-400 border border-white rounded-lg hover:bg-white hover:border-red-400 hover:text-red-400"
                                        onClick={handlerAddProduct}
                                    >
                                        Add to cart
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductInfo;
