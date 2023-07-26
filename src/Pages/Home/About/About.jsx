import React from 'react';

const About = () => {
    return (
        <div className='lg:flex justify-around'>
            <div className='h-2/3'>
                <img src="https://i.ibb.co/YWFCFcj/mh-itch.jpg" width={400} alt="" />
            </div>
            <div className='lg:w-2/4 my-auto'>
                <h2 className='text-center text-yellow-700 text-2xl font-bold'>About Us</h2>
                <p>Mh itech is a cutting-edge IT business. It offers a wide range of IT services and products
                 on a local and global level. We take note of your creative suggestions and implement
                 them as you see fit. Our customer-centric services include web development, app development,
                 artificial intelligence and robotics, eCommerce management, content creation, and many more. Our
                 knowledgeable team always keeps up with new technology and helps other employees get ready for 4IR. </p>
                 <p className='mt-2 lg:mt-6 font-bold'>Dewan Mehedi Hasan</p>
                 <p>Founder & Chief Executive officer</p>
            </div>
        </div>
    );
};

export default About;