import React, { useEffect, useState } from 'react';

import { FormLogin } from '../../components/Login/FormLogin';
import ButtonHome from '../../components/Custom/ButtonHome';
import Loader from '../../components/Custom/Loader';

const Login = () => {
    const [loader, setLoader] = useState(false);

    const handlerLoader = (value) => {
        setLoader(value);
    };

    useEffect(() => {
        return () => {
            setLoader(false);
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen lg:flex-row">
            <div className="basis-6/12 min-h-[40vh] lg:min-h-screen bg-red-400 ">
                <ButtonHome styles={`mt-4 ml-4`} />
            </div>
            <div className="basis-6/12 min-h-[60vh] flex items-center lg:min-h-screen">
                <div className="container w-8/12 mx-auto">
                    <FormLogin handlerLoader={handlerLoader} />
                </div>
            </div>
            {loader && (
                <div className="absolute z-[60] flex items-center justify-center w-full min-h-screen inset-0 bg-[rgba(255,255,255,0.9)]">
                    <Loader />
                </div>
            )}
        </div>
    );
};

export default Login;
