import ImgHero from '../../../img/Hero/slider1.png';
import LayoutMain from '../../Layouts/Home';

const Hero = () => {
    return (
        <LayoutMain>
            <div className="bg-second min-h-[65vh] rounded-3xl flex flex-col md:flex-row justify-evenly items-center p-10">
                <div className="mb-5 basis-5/12">
                    <h1 className="mb-5 text-5xl lg:text-6xl xl:text-7xl">
                        Let’s find your fashion outfit.
                    </h1>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex dolor, aliquam incidunt voluptas vero sit
                        exercitationem soluta nam laudantium
                    </p>
                    <div className="flex justify-between w-32">
                        <a href="#">Fa</a>
                        <a href="#">Th</a>
                        <a href="#">In</a>
                    </div>
                </div>
                <div className="basis-5/12">
                    <img src={ImgHero} alt="hello" />
                </div>
            </div>
        </LayoutMain>
    );
};

export default Hero;
