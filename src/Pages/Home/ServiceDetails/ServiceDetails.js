import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {

    const { serviceID } = useParams();
    const { services, loading } = useServices();
    const service = services.find(service => service._id === parseInt(serviceID));

    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-grow text-primary m-5 text-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    const { name, img_large, description } = service;

    return (
        <div className="page">
            <div className="container p-5 text-lg-center">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-5 mx-lg-4">
                    <div className="col">
                        <img src={img_large} className="img-fluid shadow-lg" alt="" />
                    </div>

                    <div className="col px-auto px-lg-5">
                        <h1 className="fw-bold text-primary mb-4">{name}</h1>
                        <p className="text-start text-secondary fw-wrap">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;