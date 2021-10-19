import React from 'react';
import useServices from '../../../hooks/useServices';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    
    const {doctors} = useServices();
    
    return (
        <div className="container pb-5">
            <h2 className="text-center fw-bold">Meet Our <span className="text-primary">Doctors</span></h2>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 my-4">
                {
                    doctors.map(doctor => (
                        <Doctor key={doctor._id} doctor={doctor} />
                    ))
                }
            </div>
        </div>
    );
};

export default Doctors;