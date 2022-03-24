import React from 'react';
import { Formik } from 'formik';

import { IoMdClose } from 'react-icons/io';

const index = (props) => {
    const {
        name,
        price,
        category,
        quantity,
        description,
        handlerEditProduct,
        handlerOpenEditProduct
    } = props;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full min-h-screen bg-[rgba(0,0,0,0.3)]">
            <div className="w-7/12 p-4 bg-white rounded-lg h-4/6">
                <header className="flex justify-between">
                    <h5 className="mx-auto mb-8 text-2xl capitalize">
                        edit produdct
                    </h5>
                    <IoMdClose
                        className="text-3xl cursor-pointer"
                        onClick={handlerOpenEditProduct}
                    />
                </header>
                <div>
                    <Formik
                        initialValues={{
                            name,
                            price,
                            quantity,
                            category,
                            description
                        }}
                        validate={(value) => {
                            let errors = {};

                            // name validation
                            if (!value.name) {
                                errors.name = 'Please enter a name';
                            } else if (
                                !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.name)
                            ) {
                                errors.name =
                                    'The name can only contain letters and spaces';
                            }

                            return errors;
                        }}
                        onSubmit={(value, { setSubmitting }) => {
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            errors,
                            handlerSubmit,
                            handleChange,
                            handleBlur
                        }) => (
                            <form action="" onSubmit={handlerSubmit}>
                                <div className="flex flex-col w-9/12 mx-auto gap-y-4">
                                    <div className="flex gap-x-7">
                                        <div className="w-full">
                                            <label>Name</label>
                                            <input
                                                className={`block px-2 py-3 border rounded-lg w-full ${
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
                                        <div className="w-full">
                                            <label>Price</label>
                                            <input
                                                className={`block px-2 py-3 border rounded-lg w-full ${
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
                                    </div>
                                    <div className="flex gap-7">
                                        <div className="w-full">
                                            <label>Quantity</label>
                                            <input
                                                className={`block px-2 py-3 border rounded-lg w-full ${
                                                    errors.quantity &&
                                                    'text-red-500 border-red-500 placeholder-red-500'
                                                }`}
                                                type="number"
                                                id="quantity"
                                                name="quantity"
                                                min={1}
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
                                        <div className="w-full">
                                            <label>Category</label>
                                            <input
                                                className={`block px-2 py-3 border rounded-lg w-full ${
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
                                        className="p-2 mt-5 border rounded-lg"
                                        placeholder="Description"
                                        cols="30"
                                        rows="5"
                                        onChange={handleChange}
                                        value={values.description}
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="px-2 py-3 text-base bg-white border rounded-lg"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default index;
