import React from 'react';

const Doctor = ({ doctor }) => {
    
    const { name, img, email, field, phone } = doctor;
    
    return (
        <div className="col">
            <div className="card shadow-lg h-100 p-3 rounded text-center">
                <img src={img} className="card-img-top rounded" alt="..." />
                <div className="card-body pt-3 px-0">
                    <h4 className="card-title fw-bold text-info">{name}</h4>
                    <h6 className="card-text fw-bold text-secondary">{field}</h6>
                    <p className="card-text text-secondary m-0 mt-3">Email : {email}</p>
                    <p className="card-text text-secondary">Phone :{phone}</p>
                </div>
                <button className="btn btn-primary w-auto mx-auto">Request an Appointment <i className="fas fa-angle-right"></i></button>
            </div>
        </div>
    );
};

export default Doctor;