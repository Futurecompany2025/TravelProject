import './footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div id='footer' className="footer-area footer-padding footer-bg" data-background="assets/img/service/footer_bg.jpg">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                        <div className="single-footer-caption mb-4">
                            <div className="single-footer-caption mb-3">
                                <div className="footer-tittle">
                                    <div className="footer-pera">
                                        <h4 className="h6">J1 Trekking</h4>
                                        <p className="small">
                                            <strong>Nepal Contact:</strong><br />
                                            Address: Thamel, Kathmandu, Nepal<br />
                                            Phone: +977 9841666232<br />
                                            Email: info@trekwaysnepal.com
                                        </p>
                                        <h4 className="h6">USA Contact</h4>
                                        <p className="small">
                                            Address: Stillwater, MN 55082<br />
                                            Phone: +1-651-703-8181<br />
                                            Email: stevenayers10@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                        <div className="single-footer-caption mb-4">
                            <div className="footer-tittle">
                                <h4 className="h6">Subscribe Our Newsletter</h4>
                                <p className="small">Get the latest news, offers and inspiring travel stories straight to your inbox.</p>
                                <input type="text" className="form-control form-control-sm mb-2" placeholder="Your Name" />
                                <input type="email" className="form-control form-control-sm mb-2" placeholder="Your Email Address" />
                                <button className="btn btn-sm btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                        <div className="single-footer-caption mb-4">
                            <div className="footer-tittle">
                                <h4 className="h6">Pages</h4>
                                <ul className="list-unstyled small">
                        {/* Replace '#' with the actual paths */}
                        <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/ourteam">Our Team</Link></li>
                                    <li><a href="#">Online Payment</a></li>
                                    <li><a href="#">Bank Details</a></li>
                                    <li><a href="#">Reviews</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                        <div className="single-footer-caption mb-4">
                            <div className="footer-tittle">
                                <h4 className="h6">Privacy Policy</h4>
                                <ul className="list-unstyled small">
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Condition</a></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                        <div className="single-footer-caption mb-4">
                            <div className="footer-tittle">
                                <h4 className="h6">We Accept</h4>
                                <p className="small">Online payment methods</p>
                                <button className="btn btn-sm btn-primary">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-xl-7 col-lg-7 col-md-7">
                        <div className="footer-copy-right">
                            <p className="small">Copyright &copy;{new Date().getFullYear()} All rights reserved</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="footer-social f-right">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fas fa-globe"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
