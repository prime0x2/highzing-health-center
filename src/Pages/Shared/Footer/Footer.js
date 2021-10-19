import React from 'react';
import logo from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer container-fluid text-center bg-dark py-4 d-flex justify-content-around">
            <div className="row row-cols-1 row-cols-md-3 align-items-center justify-content-around">
                
                <div className="col pt-2 py-lg-0 px-auto px-lg-5 text-center text-lg-start">
                    <div className="d-flex align-items-center justify-content-center">
                        <a className="navbar-brand text-light" href="/"><img src={logo} alt="" /></a>
                        <a href="/" className="navbar-brand text-light text-start">
                            <h4 className="m-0 fw-bold">HighZing</h4>
                            <h6 className="m-0 fw-bold">Medical & Health Center</h6>
                        </a>
                    </div>
                </div>

                <div className="col pt-5 ps-5 py-lg-0 px-auto px-lg-5">
                    <div className="d-flex align-items-center justify-content-start text-start">
                        <div className="footer-icon">
                            <i className="fas fas2 fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <p className="py-0 m-0">California</p>
                            <p className="py-0 m-0">US (United States)</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start text-start pt-3">
                        <div className="footer-icon">
                            <i className="fas fas2 fa-phone-alt"></i>
                        </div>
                        <div>
                            <p className="py-0 m-0 fw-bold">+1 555 000000000</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start text-start pt-3">
                        <div className="footer-icon">
                            <i className="fas fas2 fa-envelope"></i>
                        </div>
                        <div>
                            <p className="py-0 m-0">support@highzing.com</p>
                        </div>
                    </div>
                </div>


                <div className="col pt-5 py-lg-0 px-auto px-lg-5">
                    <div className="text-center text-lg-start">
                        <h6 className="fw-bold">About the Company</h6>
                        <p className="text-secondary py-2">HighZing is an medical & health care center. Our staff members are well trained professional.</p>
                        <div>
                            <i className="footer-icons fab fab2 fa-facebook-square"></i>
                            <i className="footer-icons fab fab2 fa-instagram"></i>
                            <i className="footer-icons fab fab2 fa-twitter-square"></i>
                            <i className="footer-icons fab fab2 fa-github-square"></i>
                        </div>
                    </div>
                </div>
            </div>


            {/* 
            <div>
                <img src={logo} alt="" />
                <div>
                    <ul>
                        <li>
                            <NavLink to="/home" activeClassName="selected" className="nav-link text-light px-4">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" activeClassName="selected" className="nav-link text-light px-4">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pricing" activeClassName="selected" className="nav-link text-light px-4">Pricing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="selected" className="nav-link text-light px-4">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="d-flex align-items-center text-start">
                    <div className="footer-icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <p className="py-0 m-0">California</p>
                        <p className="py-0 m-0">US (United States)</p>
                    </div>
                </div>
                <div className="d-flex align-items-center text-start pt-3">
                    <div className="footer-icon">
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                        <p className="py-0 m-0 fw-bold">+1 555 000000000</p>
                    </div>
                </div>
                <div className="d-flex align-items-center text-start pt-3">
                    <div className="footer-icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                        <p className="py-0 m-0">support@coursehub.com</p>
                    </div>
                </div>
            </div>

            <div className="text-start">
                <h6 className="fw-bold">About the Company</h6>
                <p className="text-secondary py-2">CourseHub is an E-Learning platform. Here you can learn <br /> or teach and show your talent.</p>
                <div>
                    <i className="footer-icon fab fa-facebook-square"></i>
                    <i className="footer-icon fab fa-instagram"></i>
                    <i className="footer-icon fab fa-twitter-square"></i>
                    <i className="footer-icon fab fa-github-square"></i>
                </div>
            </div> */}
        </div>
    );
};

export default Footer;