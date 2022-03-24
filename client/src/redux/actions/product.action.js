import axios from 'axios';

export const handlerProductDelete = ({ id, token }) => {
    return async () => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_APP_API_URL}/api/v1/products/${id}`,
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

export const handlerProductEdit = ({
    id,
    name,
    description,
    price,
    quantity,
    category,
    token
}) => {
    return async () => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_APP_API_URL}/api/v1/products/${id}`,
                { product: { name, description, price, quantity, category } },
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
