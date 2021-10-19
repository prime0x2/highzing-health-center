import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="page">
            <Banner />
            <Services />
            <Doctors />
            <Testimonials />
        </div>
    );
};

export default Home;