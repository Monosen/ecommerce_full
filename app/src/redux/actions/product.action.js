import axios from 'axios';
import { useSelector } from 'react-redux';

export const productEdit = (productData, id) => {
    const { token } = useSelector((store) => store.session);
    return async () => {
        try {
            await axios.patch(
                `/api/v1/products/${id}`,
                { product: productData },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const productDelete = (id) => {
    const { token } = useSelector((store) => store.session);
    return async () => {
        try {
            await axios.delete(`/api/v1/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const createNewProduct = (productData) => {
    const { token } = useSelector((store) => store.session);
    return async () => {
        try {
            const response = await axios.post(`/api/v1/products`, productData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
};
