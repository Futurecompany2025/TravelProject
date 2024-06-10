import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Headerbar from '../components/Headbar';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
const ContactUs = () => {
    return (
        <div>
            <Headerbar />
            <Navbar />
            <HeaderSection />
            <ContactDescription />
            <Footer />
        </div>
    );
}
const HeaderSection = () => {
    return (
        <header className="contact-header" style={{ 
            backgroundImage: `url(${require('../assets/img/hero/2.webp')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: 'center',
            color: 'white',
            paddingTop: '50px',
            paddingBottom: '50px'
        }}>
            <h1 className="text-white mb-4">Contact Us</h1>
            <div className="breadcrumb-container">
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="text-white">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active className="text-white">Contact Us</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </header>
    );
}
const ContactDescription = () => {
    return (
        <div className="bg-image py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Nepal Contact</h2>
                        <p className="mb-4">Thamel, Kathmandu Nepal</p>
                        <p>+977 9841666232</p>
                        <p>info@trekwaysnepal.com</p>
                        <p>+977 9841666232</p>
                        <h2>USA Contact</h2>
                        <p className="mb-4">Steven Ayers</p>
                        <p>Stillwater, MN 55082</p>
                        <p>+1-651-703-8181</p>
                        <p>stevenayers10@gmail.com</p>
                        <h2>UK Contact</h2>
                        <p className="mb-4">Mr. Darren Thomas</p>
                        <p>+447946748780</p>
                        <p>darren@signpostedcymru.com</p>
                    </div>
                    <div className="col-md-6">
                        <h2>Contact Us</h2>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" name="phone" placeholder="Your Phone" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;
