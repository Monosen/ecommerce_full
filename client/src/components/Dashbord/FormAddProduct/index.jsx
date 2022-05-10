import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { createNewProduct } from '../../../redux/actions/product.action';

const FormAddProduct = () => {
    const dispatch = useDispatch();
    const fileRef = useRef(null);

    const handlerCreateProduct = (values) => {
        // console.log(values);
        const { name, price, quantity, category, description, file } = values;
        const productData = new FormData();
        productData.append('name', name);
        productData.append('description', description);
        productData.append('price', price);
        productData.append('quantity', quantity);
        productData.append('category', category);

        let i = 0;
        for (const key in file) {
            if (i < 3) {
                productData.append('productImgs', file[key]);
                i++;
            }
        }

        dispatch(createNewProduct(productData));
    };

    const addToProductSchema = yup.object({
        name: yup.string().required('Name is required'),
        price: yup.number().min(1, 'min 1').required('Price is required'),
        quantity: yup.number().required('Quantity is required'),
        category: yup.string().required('Category is required'),
        description: yup.string().required('Description is required'),
        file: yup.mixed().required('File is required')
    });

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center w-full min-h-screen">
            <div className="w-7/12 p-4 rounded-lg bg-slate-400 h-4/6">
                <header className="flex justify-between">
                    <h5 className="mx-auto mb-8 text-2xl capitalize">
                        edit produdct
                    </h5>
                </header>
                <Formik
                    initialValues={{
                        name: '',
                        price: '',
                        quantity: '',
                        category: '',
                        description: '',
                        file: null
                    }}
                    validationSchema={addToProductSchema}
                    onSubmit={(values) => handlerCreateProduct(values)}
                >
                    {({ errors, setFieldValue }) => (
                        <Form>
                            <div className="flex flex-col w-9/12 mx-auto gap-y-4">
                                <div className="flex gap-x-7">
                                    <div className="w-full">
                                        <label>Name</label>
                                        <Field
                                            className={`block px-2 py-3 border rounded-lg w-full ${
                                                errors.name &&
                                                'text-red-500 border-red-500 placeholder-red-500'
                                            }`}
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            className="text-red-600 capitalize"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label>Price</label>
                                        <Field
                                            className={`block px-2 py-3 border rounded-lg w-full ${
                                                errors.price &&
                                                'text-red-500 border-red-500 placeholder-red-500'
                                            }`}
                                            type="number"
                                            name="price"
                                            placeholder="Price"
                                        />
                                        <ErrorMessage
                                            name="price"
                                            className="text-red-600 capitalize"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-7">
                                    <div className="w-full">
                                        <label>Quantity</label>
                                        <Field
                                            className={`block px-2 py-3 border rounded-lg w-full ${
                                                errors.quantity &&
                                                'text-red-500 border-red-500 placeholder-red-500'
                                            }`}
                                            type="number"
                                            name="quantity"
                                            min={1}
                                            placeholder="Quantity"
                                        />
                                        <ErrorMessage
                                            name="quantity"
                                            className="text-red-600 capitalize"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label>Category</label>
                                        <Field
                                            className={`block px-2 py-3 border rounded-lg w-full ${
                                                errors.category &&
                                                'text-red-500 border-red-500 placeholder-red-500'
                                            }`}
                                            type="text"
                                            id="categoty"
                                            name="category"
                                            placeholder="Category"
                                        />
                                        <ErrorMessage
                                            name="category"
                                            className="text-red-600 capitalize"
                                        />
                                    </div>
                                </div>
                                <Field
                                    className="p-2 mt-5 border rounded-lg"
                                    placeholder="Description"
                                    name="description"
                                    cols="30"
                                    rows="5"
                                    as="textarea"
                                />
                                <input
                                    ref={fileRef}
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(event) => {
                                        setFieldValue(
                                            'file',
                                            event.currentTarget.files
                                        );
                                    }}
                                />
                                <button
                                    type="submit"
                                    // onClick={() => {
                                    //     fileRef.current.click();
                                    // }}
                                    className="px-2 py-3 text-base bg-white border rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default FormAddProduct;
