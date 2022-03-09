import React, { useEffect, useState } from 'react';

import { BsArrowUp } from 'react-icons/bs';

const ButtonTop = () => {
    const [button, setButton] = useState(false);

    const handlerButtonTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handlerActiveButtonTop = () => {
            if (window.scrollY >= 130) {
                setButton(true);
            } else {
                setButton(true);
            }
        };
        handlerActiveButtonTop();
    }, [window.scrollY >= 130]);

    return (
        <button
            className={`${
                button ? 'fixed' : 'hidden'
            }  z-30 flex items-center justify-center w-10 h-10 overflow-hidden rounded-full right-7 bottom-7 bg-[#1D3557]`}
            onClick={handlerButtonTop}
        >
            <div className="hhover:-translate-y-5">
                <BsArrowUp className="text-xl text-white" />
            </div>
        </button>
    );
};

export default ButtonTop;
