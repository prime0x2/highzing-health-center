import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="page">
            <Banner />
            <Services />
            <Doctors />
        </div>
    );
};

export default Home;