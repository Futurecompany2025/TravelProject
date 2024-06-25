import React from 'react';
import Headerbar from '../../components/Headbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './FamilyTrip.css';
import Img1 from '../../../src/assets/img/gallery/1.png';
import Img2 from '../../../src/assets/img/gallery/2.png';
import Img3 from '../../../src/assets/img/gallery/3.png';
import Img4 from '../../../src/assets/img/gallery/img.jpeg';
import Img5 from '../../../src/assets/img/gallery/img2.jpg';  
import Img6 from '../../../src/assets/img/gallery/img3.jpg';
import Img7 from '../../../src/assets/img/gallery/img.jpeg';
import Img8 from '../../../src/assets/img/gallery/img2.jpg';
const images = [
  { slug: 'three-high-passes-trek', image: Img1, title:'Muldai View Trek', duration: '19 Days', price: 'USD 1790' },
  { slug: 'everest-base-camp-trek', image: Img2, title: 'Short Annapurna Circuit Trek', duration: '15 Days', price: 'USD 1390' },
  { slug: 'annapurna-panorama-trek', image: Img3, title: 'Gosainkunda Holy Lake Trek Via Langtang Valley', duration: '12 Days', price: 'USD 1040' },
  { slug: 'ultra-luxury-trek-to-everest-base-camp', image: Img4, title: 'Annapurna Circuit Trek with Tilicho Lake', duration: '13 Days', price: 'USD 5220' },
  { slug: 'upper-mustang-trek', image: Img5, title: 'Short Annapurna Base Camp Trek', duration: '16 Days', price: 'USD 2395' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Img6, title: 'Tamang Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'annapurna-circuit-trek', image: Img7, title: 'Annapurna Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' }
];
const FamilyTrip = () => {
  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="family-trip">
        <div className="title-section">
          <h1>Family Trip</h1>
        </div>
        <div className="content-section">
          <div className="container">
            <div className="row mt-4">
              {images.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <div className="zoom-image">
                      <img src={item.image} className="card-img-top img-fluid" alt={item.title} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        <strong>Duration:</strong> {item.duration}<br/>
                        <strong>Price:</strong> {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FamilyTrip;
