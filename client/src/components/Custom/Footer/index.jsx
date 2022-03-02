import { Link } from 'react-router-dom';

import Payment from '../../../img/Footer/payment.png';

import {
    AiOutlineFacebook,
    AiOutlineTwitter,
    AiOutlineInstagram
} from 'react-icons/ai';

const index = () => {
    return (
        <footer>
            <div className="container px-2 pt-20 mx-auto sm:px-5 md:px-10 lg:max-w-8xl">
                <div className="bg-[#F7F8F9] min-h-[65vh] rounded-3xl">
                    <div className="flex flex-col flex-wrap justify-between w-10/12 min-h-[65vh]  py-10 mx-auto text-center md:flex-row md:justify-center">
                        <div className="basis-6/12">
                            <h3 className="mb-4 text-3xl">MonoShop</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur consequuntur sed
                                voluptate, deleniti optio blanditiis.
                            </p>
                        </div>
                        <div className="basis-6/12 ">
                            <h3 className="mb-5 text-2xl">Ecommerce</h3>
                            <ul>
                                <li className="mb-3">
                                    <Link to={`/`}>Products</Link>
                                </li>
                                <li className="mb-3">
                                    <Link to={`/`}>Your Cart</Link>
                                </li>
                                <li className="mb-3">
                                    <Link to={`/`}>Your Order</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="basis-2/12">
                            <h3 className="mb-5 text-2xl">Red Social</h3>
                            <AiOutlineFacebook className="inline-block m-0 text-2xl text-red-400" />
                            <AiOutlineTwitter className="inline-block m-0 text-2xl text-red-400" />
                            <AiOutlineInstagram className="inline-block m-0 text-2xl text-red-400" />
                        </div>
                        <div className="flex flex-col items-center justify-between basis-full md:flex-row">
                            <img
                                className="object-contain basis-2"
                                src={Payment}
                                alt="payment"
                            />
                            <p>© 2021 Merier. Made with by MonoSen</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default index;
