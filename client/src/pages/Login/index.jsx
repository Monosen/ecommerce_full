import React from 'react';

import FormLogin from '../../components/Login/FormLogin';
import ButtonHome from '../../components/Custom/ButtonHome';

const index = () => {
    return (
        <div className="flex flex-col min-h-screen lg:flex-row">
            <div className="basis-6/12 min-h-[40vh] lg:min-h-screen bg-purple-500 ">
                <ButtonHome styles={`mt-4 ml-4`} />
            </div>
            <div className="basis-6/12 min-h-[60vh] flex items-center lg:min-h-screen">
                <div className="container w-8/12 mx-auto">
                    <FormLogin />
                </div>
            </div>
        </div>
    );
};

export default index;
