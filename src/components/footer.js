import React from 'react';
const Footer = () => {
    return (
        <footer>
            <div className="footer-area footer-padding footer-bg" data-background="assets/img/service/footer_bg.jpg">
                <div className="container">
                    {/* Content for top left */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footer-tittle">
                                <h4>Trek Ways Nepal Pvt Ltd</h4>
                                <p>Nepal Contact</p>
                                <p>Address: Thamel, Kathmandu, Nepal</p>
                                <p>Phone: +977 9841666232</p>
                                <p>Email: info@trekwaysnepal.com</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-tittle">
                                <p>USA Contact</p>
                                <p>Address: Stillwater, MN 55082</p>
                                <p>Phone: +1-651-703-8181</p>
                                <p>Email: stevenayers10@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    {/* End of top left content */}

                    {/* Content for footer columns */}
                    <div className="row pt-padding">
                        <div className="col-lg-3">
                            <div className="footer-tittle">
                                <h4>Subscribe Our Newsletter</h4>
                                <p>Get the latest news, offers and inspiring travel stories straight to your inbox.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <form>
                                <div className="footer-tittle">
                                    <input type="text" placeholder="Your Name" />
                                    <input type="email" placeholder="Your Email Address" />
                                    <button type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Blogs</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-tittle">
                                <h4>We Accept</h4>
                                <p>Online Payment Methods</p>
                                <button>Pay Now</button>
                                <button></button>
                            </div>
                        </div>
                    </div>
                    {/* End of footer columns */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
