import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content" data-aos="fade-right">
                            <h1 className="hero-title">
                                3D Animated<br />
                                Mockups in<br />
                                Seconds.
                            </h1>
                            <p className="hero-description">
                                Transform your 2D designs into stunning 3D – complete<br />
                                with wind effects, walking animations, and seamless<br />
                                video exports.
                            </p>
                            <div className="hero-cta">
                                <a href="#" className="btn btn-create">Create</a>
                                <span className="no-signup">No sign up required!</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-image-container" data-aos="fade-left">
                            <img
                                src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="3D T-shirt Mockup"
                                className="hero-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;