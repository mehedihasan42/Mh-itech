import React from 'react';

const Choose = () => {
    return (
        <div className='lg:flex justify-around'>
            <div data-aos="fade-up-right">
                <img
                width={400}
                 src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div data-aos="fade-up-left" className='lg:w-2/4 my-auto px-4'>
            <h2 className='text-center text-yellow-700 text-2xl font-bold my-4'>Why Choose Us?</h2>
            <p className=''>
            We Are Here For Made Your Idea. Our team is dedicated to learning and understanding about
           your business. By building a relationship with each of our clients, we can ensure our marketing 
           strategy is built with the sole focus of solving the problems your business faces. Each of our 
           marketing campaigns is built with the clients needs in mind to solve the greatest marketing problems. 
           Our team is not only dedicated to their profession; they are persistent also to make clients completely 
           satisfied because our services are client-centric.
            </p>
            </div>
        </div>
    );
};

export default Choose;