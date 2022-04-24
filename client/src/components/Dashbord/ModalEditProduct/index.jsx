import { Formik, Field, Form, ErrorMessage } from 'formik';
import { number, object, string } from 'yup';

import { IoMdClose } from 'react-icons/io';

const ModalEditProduct = (props) => {
    const {
        name,
        price,
        category,
        quantity,
        description,
        handlerEditProduct,
        handlerOpenEditProduct
    } = props;

    const editProductSchema = object({
        name: string().required('Name is required'),
        price: number().required('Price is required'),
        quantity: number().required('Quantity is required'),
        category: string().required('Category is required'),
        description: string().required('Description is required')
    });

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

                <Formik
                    initialValues={{
                        name,
                        price,
                        quantity,
                        category,
                        description
                    }}
                    validationSchema={editProductSchema}
                    onSubmit={(values) => handlerEditProduct(values)}
                >
                    {({ errors }) => (
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
                                    cols="30"
                                    rows="5"
                                    name="description"
                                    as="textarea"
                                />
                                <ErrorMessage
                                    name="description"
                                    className="text-red-600 capitalize"
                                />
                                <button
                                    type="submit"
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

export default ModalEditProduct;
