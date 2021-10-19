import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, name, description, img_small } = service;

    return (
        <div className="col">
            <div className="card shadow-lg h-100 p-4 rounded">
                <img src={img_small} className="card-img-top rounded" alt="..." />
                <div className="card-body pt-3 px-0">
                    <h4 className="card-title fw-bold text-secondary">{name}</h4>
                    <p className="card-text text-secondary">{description.slice(0, 115)}...</p>
                </div>
                <Link to={`/service/${_id}`}>
                    <button className="btn btn-primary">View Details <i className="fas fa-angle-right"></i></button>
                </Link>
            </div>
        </div>
    );
};

export default Service;