import picture1 from '../../../assets/a6c66ca55e61ecb70c82ce6a949e9920.png';
import picture2 from '../../../assets/disney-soft-toys-434x368px-eng.jpg';
import picture3 from '../../../assets/d2af99def19d43e4d4321c6f8a04084d.jpg';
import picture4 from '../../../assets/disney_miss_bunny_easter_egg_plush_1491651173_1f11488d.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]  ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={picture1} className="w-full" />
                <div>
                    <div className=" bg-gradient-to-r from-cyan-200 to-blue-0  absolute h-full  text-6xl text-left ps-28 left-0 font-bold w-1/3 spach-y-7 pt-44 ">
                        <h1 className='text-pink-900'>Lets Play <br /> Any <br /> Time</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={picture2} className="w-full" />
                <div className=" bg-gradient-to-r from-cyan-200 to-blue-0  absolute h-full  text-6xl text-left ps-24 left-0 font-bold w-1/3 spach-y-7 pt-44 ">
                        <h1 className='text-pink-900'>Lets Play <br /> All <br />Day </h1>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={picture3} className="w-full" />
                <div className=" bg-gradient-to-r from-cyan-200 to-blue-0  absolute h-full  text-6xl text-left ps-24 left-0 font-bold w-1/3 spach-y-7 pt-44 ">
                        <h1 className='text-pink-900'>Lets Play <br /> Any <br /> Time</h1>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={picture4} className="w-full " />
                <div className=" bg-gradient-to-r from-cyan-200 to-blue-0  absolute h-full  text-6xl text-left ps-24 left-0 font-bold w-1/3 spach-y-7 pt-44 ">
                        <h1 className='text-pink-900'>Lets Play <br /> All <br /> Day </h1>
                    </div>
                <div className=" absolute flex justify-between transform -translate-y-1/3 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;