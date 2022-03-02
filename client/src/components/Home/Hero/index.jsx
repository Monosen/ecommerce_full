import {
    AiOutlineFacebook,
    AiOutlineTwitter,
    AiOutlineInstagram
} from 'react-icons/ai';

const index = () => {
    return (
        <header>
            <div className="container px-2 pt-20 mx-auto sm:px-5 md:px-10 lg:max-w-8xl">
                <div className="bg-red-400 min-h-[65vh] rounded-3xl flex justify-between items-center px-10">
                    <div className="basis-5/12">
                        <h1 className="text-7xl">
                            Let’s find your fashion outfit.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex dolor, aliquam incidunt voluptas vero sit
                            exercitationem soluta nam laudantium
                        </p>
                        <div>
                            <AiOutlineFacebook className="inline-block text-xl" />
                            <AiOutlineTwitter className="inline-block text-xl" />
                            <AiOutlineInstagram className="inline-block text-xl" />
                        </div>
                    </div>
                    <div>
                        <img src="" alt="hello" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default index;
