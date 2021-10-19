import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    
    const { user, logOut } = useAuth();
    
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand text-light" href="/"><img src={logo} alt="" /></a>
                        <a href="/" className="navbar-brand">
                            <h4 className="m-0 fw-bold">HighZing</h4>
                            <h6 className="m-0 fw-bold">Medical & Health Center</h6>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" activeClassName="selected" className="nav-link px-4">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" activeClassName="selected" className="nav-link px-4">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/account" activeClassName="selected" className="nav-link px-4">Account</NavLink>
                            </li>
                            <li className="nav-item">
                                {
                                    user ? 
                                    <div>
                                        <span>{user.displayName}</span><button onClick={logOut}>Logout</button>
                                    </div> 
                                    : " "
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;