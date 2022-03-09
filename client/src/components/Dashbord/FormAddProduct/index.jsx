import React from 'react';
import { Formik } from 'formik';

const index = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                price: '',
                quantity: 0,
                category: '',
                description: ''
            }}
            validate={(value) => {
                let errors = {};

                // name validation
                if (!value.name) {
                    errors.name = 'Please enter a name';
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.name)) {
                    errors.name =
                        'The name can only contain letters and spaces';
                }

                return errors;
            }}
            onSubmit={() => {
                e.preventDefault();
            }}
        >
            {({ values, errors, handlerSubmit, handleChange, handleBlur }) => (
                <form action="" onSubmit={handlerSubmit}>
                    <div className="mx-auto">
                        <div>
                            <label>Name</label>
                            <input
                                className={`block px-2 py-3 border rounded-lg ${
                                    errors.name &&
                                    'text-red-500 border-red-500 placeholder-red-500'
                                }`}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors?.name && (
                                <p className="text-red-600 capitalize">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label>Price</label>
                            <input
                                className={`block px-2 py-3 border rounded-lg ${
                                    errors.price &&
                                    'text-red-500 border-red-500 placeholder-red-500'
                                }`}
                                type="text"
                                id="price"
                                name="price"
                                placeholder="Price"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors?.price && (
                                <p className="text-red-600 capitalize">
                                    {errors.price}
                                </p>
                            )}
                        </div>

                        <div>
                            <label>Quantity</label>
                            <input
                                className={`block px-2 py-3 border rounded-lg ${
                                    errors.quantity &&
                                    'text-red-500 border-red-500 placeholder-red-500'
                                }`}
                                type="number"
                                id="quantity"
                                name="quantity"
                                placeholder="Quantity"
                                value={values.quantity}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors?.quantity && (
                                <p className="text-red-600 capitalize">
                                    {errors.quantity}
                                </p>
                            )}
                        </div>
                        <div>
                            <label>Category</label>
                            <input
                                className={`block px-2 py-3 border rounded-lg ${
                                    errors.category &&
                                    'text-red-500 border-red-500 placeholder-red-500'
                                }`}
                                type="text"
                                id="categoty"
                                name="category"
                                placeholder="Category"
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors?.category && (
                                <p className="text-red-600 capitalize">
                                    {errors.category}
                                </p>
                            )}
                        </div>
                    </div>
                    <textarea
                        className="p-2 mt-5 rounded-lg"
                        placeholder="Description"
                        cols="30"
                        rows="5"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-2 py-3 text-base bg-white border rounded-lg"
                    >
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
};

export default index;
