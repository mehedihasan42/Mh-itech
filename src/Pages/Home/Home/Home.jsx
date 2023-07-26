import React from 'react';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Banner></Banner>
           <About></About>
        </div>
    );
};

export default Home;