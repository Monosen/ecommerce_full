import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import ItemProduct from '../../Dashbord/ItemProduct';

const index = () => {
    const [allProducts, setAllProducts] = useState([]);

    const { token } = useSelector((store) => store.session);

    useEffect(() => {
        const handlerAllProducts = async () => {
            const { data } = await axios.get(
                `http://localhost:4000/api/v1/products/user-products`,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const { products } = data.data;
            console.log(products);
            setAllProducts(products);
        };

        handlerAllProducts();
    }, []);

    return (
        <div className="grid grid-cols-3 justify-items-center gap-y-24">
            {allProducts.length > 0 &&
                allProducts.map((product) => (
                    <ItemProduct
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        id={product.id}
                        img={product.productImgs[0].imgPath}
                    />
                ))}
        </div>
    );
};

export default index;
