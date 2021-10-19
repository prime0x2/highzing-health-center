import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    
    const {services} = useServices();
    
    return (
        <div className="container py-5 px-lg-5">
            <h2 className="fw-bold m-0 text-center"><span className="text-primary">Medical</span> Services</h2>
            
            <div className="row row-cols-1 row-cols-md-3 g-5 my-1">
                {
                    services.map(service => (
                        <Service key={service._id} service={service} />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;