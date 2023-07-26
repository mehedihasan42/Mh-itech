import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import required modules
//-------add (Autoplay)
import { Navigation, Autoplay } from 'swiper/modules';
import Aos from 'aos';

Aos.init();

const Banner = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
        });
      }, []);

    const text = <>
        <h1 data-aos="fade-down-right" className="mb-5 text-3xl lg:text-5xl font-bold text-white">Mh <span className='text-[#DAFF0D]'>itch</span></h1>
        <p data-aos="fade-up-right" className="mb-5 lg:w-2/4 font-bold">Mh itch is a cutting-edge IT business. It offers a wide range of IT services and products
                 on a local and global level.We take note of your creative suggestions and implement
                 them as you see fit. Our customer-centric services include web development, app development,
                 artificial intelligence and robotics, eCommerce management, content creation, and many more.</p>
        {/* <button className="btn btn-primary">Get Started</button> */}
    </>
    return (
        <>
            <Swiper
                rewind={true}
                navigation={false}
                modules={[Navigation,Autoplay]}   //add-()
                className="mySwiper"
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
            >
                {/* ------slide 1-------------- */}
                <SwiperSlide>
                    <div className="hero min-h-screen relative bg-gradient-to-l from-gray-500 to-black">
                        <img src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                            className="w-full h-full object-cover absolute mix-blend-overlay" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div className=''>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* ------------slide 2-------- */}
                <SwiperSlide>
                    <div className="hero min-h-screen relative bg-gradient-to-l from-black to-black">
                        <img
                            className="w-full h-full object-cover absolute mix-blend-overlay"
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -----------slide 3 */}
                <SwiperSlide>
                    <div className="hero min-h-screen relative bg-gradient-to-l from-gray-500 to-black">
                        <img
                            className="w-full h-full object-cover absolute mix-blend-overlay"
                            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -------------slide 4 */}
                <SwiperSlide>
                    <div className="hero min-h-screen relative bg-gradient-to-l from-gray-500 to-black">
                        <img
                            className="w-full h-full object-cover absolute mix-blend-overlay"
                            src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -----------slide 5 */}
                <SwiperSlide>
                    <div className="hero min-h-screen relative bg-gradient-to-l from-gray-500 to-black">
                        <img
                            className="w-full h-full object-cover absolute mix-blend-overlay"
                            src="https://plus.unsplash.com/premium_photo-1678564741870-d68a69925537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -------------slide 6 */}
                <SwiperSlide>
                    <div className="hero min-h-screen  relative bg-gradient-to-l from-gray-500 to-black">
                        <img
                            className="w-full h-full object-cover absolute mix-blend-overlay"
                            src="https://images.unsplash.com/photo-1631624217902-d14c634ab17c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;