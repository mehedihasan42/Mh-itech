import React from 'react';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Choose from '../Choose/Choose';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
          <>
           <NavBar></NavBar>
        <div className='space-y-24'>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Choose></Choose>
           <Testimonial></Testimonial>
           <Contact></Contact>
           <Footer></Footer>
        </div>
          </>
    );
};

export default Home;