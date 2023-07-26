import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonial = () => {

    const [infos,setInfos] = useState([])

    useEffect(()=>{
        fetch('fakeData2.json')
        .then(res=>res.json())
        .then(data=>setInfos(data))
    },[])
   
    return (

        <>
         <h2 className='text-center text-yellow-700 text-2xl font-bold'>Why Choose Us?</h2>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            infos.map(info=>
                <SwiperSlide key={info.id}>
                <div className="card w-96 lg:w-1/3 bg-base-100 shadow-xl mx-auto">
               <figure className="px-10 pt-10">
                 <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title">Shoes!</h2>
                 <p>If a dog chews shoes whose shoes does he choose?</p>
                 <div className="card-actions">
                   <button className="btn btn-primary">Buy Now</button>
                 </div>
               </div>
             </div>
                </SwiperSlide>
                )
            }
            </Swiper>
       
      </>
    //    <>
    //     <h2 className='text-center text-yellow-700 text-2xl font-bold'>Testimonial</h2>
    //     <p className='w-1/3 mx-auto text-center'>We deliver the digital result you desire.For whom we have this platform,
    //       their comments about us</p>
    //    
    //    </>
    );
};

export default Testimonial;