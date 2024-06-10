import React from 'react';
import './whyus.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhyUs = () => {
    return (
        <div style={{backgroundColor: '#007bff'}} className="our-services servic-padding">
            <div className="container text-white">
                <div className="col-lg-12">
                    <div className="section-tittle text-center">
                        <span>Why Us?</span>
                        <h2>Our Qualities</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-value"></span>
                            </div>
                            <div className="services-cap">
                                <h5>Great Value</h5>
                                <p>At J1 Trekking Nepal, we understand that value goes beyond the price you pay; it's about the quality of experience you receive for every dollar spent.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-safety"></span>
                            </div>
                            <div className="services-cap">
                                <h5>Safety and Security</h5>
                                <p>At J1 Trekking Nepal, we prioritize the safety and security of our valued travelers above all else. Our unwavering commitment to 'Safety and Security' is at the core of everything we do.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-fast-response"></span>
                            </div>
                            <div className="services-cap">
                                <h5>Fast Response in Time</h5>
                                <p>At J1 Trekking Nepal, we take pride in our commitment to providing a seamless and efficient experience for our customers. One of the cornerstones of our service is our unwavering dedication to a 'Fast Response in Time.'</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-guarantee"></span>
                            </div>
                            <div className="services-cap">
                                <h5>Guarantee Departure</h5>
                                <p>At J1 Trekking Nepal, we understand that your time is precious, and the last thing you want is uncertainty about your travel plans. That's why we take pride in offering a 'Guaranteed Departure' assurance, setting us apart as a reliable and trustworthy travel partner.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-staff-care"></span>
                            </div>
                            <div className="services-cap">
                                <h5>Staff Care and Security</h5>
                                <p>At J1 Trekking Nepal, we prioritize the well-being of our staff and the security of our valued customers. Our dedication to 'Staff Care and Security' sets us apart as a travel company that goes above and beyond to create a safe and supportive environment for both our team members and clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-flexible"></span>
                            </div>
                            <div className="services-cap">
                                <h5>Flexible Options</h5>
                                <p>Discover the freedom of personalized travel with Trek Ways Nepal. We understand that every traveler is unique, and so are their preferences. Our commitment to customization allows you to tailor your journey precisely to your desires.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;
