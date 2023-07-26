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
            <h2 className='text-center text-yellow-700 text-2xl font-bold'>Our Services</h2>
            <div className='lg:flex justify-center'>
                {
                    info.map(data =>
                        <div key={data.id} className="card card-compact w-96 bg-base-100 shadow-xl">
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