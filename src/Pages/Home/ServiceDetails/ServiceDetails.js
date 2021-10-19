import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {

    const { serviceID } = useParams();
    const [services, loading] = useServices();
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
        <div className="page container w-75 p-5 text-lg-center">
            <img src={img_large} className="img-fluid mb-3" alt="" />
            <h2 className="fw-bold text-info">{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ServiceDetails;