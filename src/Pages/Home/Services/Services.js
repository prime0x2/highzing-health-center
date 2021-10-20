import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    
    const {services} = useServices();
    const location = useLocation();
    
    return (
        <div className="container text-center py-5 px-lg-5">
            <h2 className="fw-bold m-0"><span className="text-primary">Medical</span> Services</h2>
            
            <div className="row row-cols-1 row-cols-md-3 g-4 g-lg-5 py-5">
                {
                    location.pathname !== "/services" ?
                    (
                        services.slice(0, 6).map(service => (
                            <Service key={service._id} service={service} />
                        ))
                    ) : (
                        services.map(service => (
                            <Service key={service._id} service={service} />
                        ))
                    )
                }
            </div>
            
            {
                location.pathname !== "/services" && <Link to="/services"><button className="btn btn-primary">Check All Services</button></Link>
            }
        </div>
    );
};

export default Services;