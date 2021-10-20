import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="page">
            <Banner />
            <Services />
            <Doctors />
            <Testimonials />
            <Products />
        </div>
    );
};

export default Home;