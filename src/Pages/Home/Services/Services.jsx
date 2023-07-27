import React, { useEffect, useState } from 'react';

const Services = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-yellow-700 text-2xl font-bold my-6'>Our Services</h2>
            <div data-aos="fade-up-right" className='lg:flex justify-center space-y-6'>
                {
                    info.map(data =>
                        <div key={data.id} className="card card-compact w-80 lg:w-96 mx-auto bg-base-100 shadow-xl">
                            <figure><img src={data.image} width={300} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.service}</h2>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;