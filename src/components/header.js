import React from 'react';
import logo from '../assets/img/logo/logo.png';
import HeroSlider from './HeroSlider'; // Import the HeroSlider component

const Header = () => {
    return (
        <header>
            {/* Your header content */}
            <div className="header-area">
                <div className="main-header">
                    <div className="header-top top-bg d-none d-lg-block">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-8">
                                    <div className="header-info-left">
                                        <ul>                          
                                            <li>J1Trekking@gmail.com</li>
                                            <li>123456</li>
                                            <li>Thamel Kathmandu</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="header-info-right f-right">
                                        <ul className="header-social">    
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom  header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                {/* Logo */}
                                <div className="col-xl-2 col-lg-2 col-md-1">
                                    <div className="logo">
                                        <a href="index.html"><img src={logo} alt="" style={{ width: '150px', height:'50px'}} /></a>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10">
                                    {/* Main-menu */}
                                    <div className="main-menu f-right d-none d-lg-block" style={{ width: '100%', height: '90px' }}> 
                                        <nav>               
                                            <ul id="navigation">
                                                <li>
                                                    <a href="#">Destinations</a>
                                                    <ul className="submenu">
                                                        <li><a href="#">Nepal</a></li>
                                                        <li><a href="#">Bhutan</a></li>
                                                        <li><a href="#">Tibet</a></li>
                                                        <li><a href="#">India</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="about.html">Day Tours</a></li>
                                                <li><a href="packages.html">Luxury Travel</a></li>
                                                <li><a href="blog.html">Travel Style</a></li>
                                                <li><a href="blog.html">Travel Guide</a></li>
                                                <li><a href="blog.html">Blogs</a></li>
                                                <li><a href="blog.html">Company</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* Mobile Menu */}
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </header>
    );
};

export default Header;
