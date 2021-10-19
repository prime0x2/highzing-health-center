import React from 'react';
import slider1 from '../../../images/slider2/author3.png';
import slider2 from '../../../images/slider2/author2.png';
import slider3 from '../../../images/slider2/author1.png';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className="container text-center py-4">
            <h1 className="fw-bold pb-5">Testimonials</h1>
            <div className="slider container-fluid">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner inner2">
                        <div className="carousel-item active d-lg-flex align-items-center justify-content-around">
                            <img src={slider1} className="d-block" alt="..." />

                            <div className="text-start slider-text">
                                <h4 className="text-primary fw-bold">Mark Brown</h4>
                                <p>“I wish the world could know the wonderful things that are happening on the Cosgrove hospital, who have had an injury. I pray each day for all of you and thank you from the bottom of my heart.”</p>
                            </div>
                        </div>
                        <div className="carousel-item d-lg-flex align-items-center justify-content-around">
                            <img src={slider2} className="d-block" alt="..." />

                            <div className="text-start slider-text">
                                <h4 className="text-primary fw-bold">Robert Davis</h4>
                                <p>“I want to express my appreciation for a very finely run and professional facility. My family was always encouraged to ask questions, which allowed them to participate in my recovery.”</p>
                            </div>
                        </div>
                        <div className="carousel-item d-lg-flex align-items-center justify-content-around">
                            <img src={slider3} className="d-block" alt="..." />

                            <div className="text-start slider-text">
                                <h4 className="text-primary fw-bold">Vanseena Adams</h4>
                                <p>“All the doctors, nurses, aides, food service employees, security and maintenance workers deserve such praise for their attention, care and reassuring behaviors my son, especially difficult times.”</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;