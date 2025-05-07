import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" height="30" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">3D Mockup Generator</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        <a href="#" className="login-link me-3">Pro Plan Login</a>
                        <a href="#" className="btn btn-upgrade">Upgrade</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;