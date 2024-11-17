<<<<<<< HEAD
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
                        <p>+977 9860915040</p>
                        <p>j1trekkingpvtltd@gmail.com</p>
                        <p></p>
                        <h2>Netherland Contact</h2>
                        <p className="mb-4">NAme</p>
                        <p>Address</p>
                        <p>+31 6 37404922
                         </p>
                        <p>@gmail.com</p>
                        <h2>Australia Contact</h2>
                        <p className="mb-4">Mr Sharleen</p>
                        <p>+61 418 768 278</p>
                        <p></p>
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
=======
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
                        <p>+977 9860915040</p>
                        <p>j1trekkingpvtltd@gmail.com</p>
                        <p></p>
                        <h2>Netherland Contact</h2>
                        <p className="mb-4">NAme</p>
                        <p>Address</p>
                        <p>+31 6 37404922
                         </p>
                        <p>@gmail.com</p>
                        <h2>Australia Contact</h2>
                        <p className="mb-4">Mr Sharleen</p>
                        <p>+61 418 768 278</p>
                        <p></p>
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
>>>>>>> e8a3bcc (Initial commit on shikhar branch)
