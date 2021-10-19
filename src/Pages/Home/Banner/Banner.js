import React from 'react';
import slide1 from '../../../images/slider/slide1.png';
import slide2 from '../../../images/slider/slide2.png';
import slide3 from '../../../images/slider/slide3.png';

const Banner = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="img-fluid d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="img-fluid d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="img-fluid d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
};

export default Banner;