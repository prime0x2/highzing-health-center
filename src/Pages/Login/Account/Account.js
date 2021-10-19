import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import loginBanner from '../../../images/loginBanner.jpg';
import './Account.css';

const Account = () => {
    const { registerNewUser, loginEmailPass, signInGoogle, error, setError } = useAuth();
    const [register, setRegister] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    /* get name, email, password from input */
    const getEmail = (event) => {
        setEmail(event.target.value);
    }
    const getPass = (event) => {
        setPassword(event.target.value);
    }
    const getName = (event) => {
        setName(event.target.value);
    }

    /* handle email password register  */
    const handleRegister = () => {
        if (password.length < 6) {
            setError("Password Must Be 6 Character long.");
            return;
        }
        registerNewUser(email, password, name)
            .then(() => {
                setRegister(false);
            })
    }

    /* handle email password login */
    const handleLogin = () => {
        loginEmailPass(email, password)
            .then(() => {
                history.push(redirect_uri);
            })
    }

    /* handle google popup login */
    const handleGoogleLogin = () => {
        signInGoogle()
            .then(() => {
                history.push(redirect_uri);
            });
    }

    /* toggle between login and register */
    const handleLoginToggle = (type) => {
        setRegister(type);
    }

    return (
        <div className="page">
            <div className="container shadow-lg p-5 mt-3 mt-lg-5 rounded-3">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-5 align-items-center">
                    <div className="col">
                        <img src={loginBanner} className="img-fluid m-lg-4 px-lg-5" alt="" />
                    </div>
                    <div className="col">
                        <div className="form shadow-lg text-center p-4 mx-lg-5 rounded">
                            <h4 className={register ? "active-login-toggle mx-3 pb-2" : "login-toggle mx-3 pb-2"} onClick={() => handleLoginToggle(true)}>Sign UP</h4>
                            <h4 className={register ? "login-toggle mx-3 pb-2" : "active-login-toggle mx-3 pb-2"} onClick={() => handleLoginToggle(false)}>Sign IN</h4>

                            <form onSubmit={(e) => { e.preventDefault(); register ? handleRegister() : handleLogin() }} className="text-start px-lg-3 mt-1 text-center">
                                {
                                    register ?
                                        <div className="mb-3 text-start">
                                            <label htmlFor="fName" className="form-label">Full Name</label>
                                            <input onBlur={getName} type="text" className="form-control" aria-label="Full name" required />
                                        </div> :
                                        ""
                                }
                                <div className="mb-2 text-start">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input onBlur={getEmail} type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="text-start">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input onBlur={getPass} type="password" className="form-control" id="inputPassword4" />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3"><i className="fas fa-sign-in-alt"></i> &nbsp;{register ? "Sign UP" : "Sign In"}</button>
                            </form>
                            <div className="text-center">
                                <p className="m-2">Or</p>
                                <button onClick={handleGoogleLogin} className="btn btn-primary"><i className="fab fa-google"></i> &nbsp;Sign In using Google</button>
                            </div>
                            <br />
                            <span className="text-danger">{error}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;