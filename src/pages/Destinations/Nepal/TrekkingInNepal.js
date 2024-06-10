import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../../components/navbar';
import Headbar from '../../../components/Headbar';

import Footer from '../../../components/footer';
import Trek1 from '../../../assets/img/hero/Trekking/1.jpeg';
import Trek2 from '../../../assets/img/hero/Trekking/2.jpeg';
import Trek3 from '../../../assets/img/hero/Trekking/3.jpg';
import Trek4 from '../../../assets/img/hero/Trekking/4.jpg';
import Trek5 from '../../../assets/img/hero/Trekking/5.jpeg';
import Trek6 from '../../../assets/img/hero/Trekking/6.jpeg';
import Trek7 from '../../../assets/img/hero/Trekking/7.jpeg';
import Trek8 from '../../../assets/img/hero/Trekking/8.jpeg';
import Trek9 from '../../../assets/img/hero/Trekking/9.jpeg';
import Trek10 from '../../../assets/img/hero/Trekking/10.jpeg';
import Trek11 from '../../../assets/img/hero/Trekking/11.jpeg';
import Trek12 from '../../../assets/img/hero/Trekking/12.jpeg';
import Trek13 from '../../../assets/img/hero/Trekking/13.jpeg';
import Trek14 from '../../../assets/img/hero/Trekking/14.jpeg';
import Trek15 from '../../../assets/img/hero/Trekking/15.jpeg';
import Trek16 from '../../../assets/img/hero/Trekking/16.jpeg';
import Trek17 from '../../../assets/img/hero/Trekking/17.jpeg';
import Trek18 from '../../../assets/img/hero/Trekking/18.jpg';
import Trek19 from '../../../assets/img/hero/Trekking/19.jpg';
import Trek20 from '../../../assets/img/hero/Trekking/20.jpeg';
import Trek21 from '../../../assets/img/hero/Trekking/21.jpeg';
import Trek22 from '../../../assets/img/hero/Trekking/22.jpeg';
import Trek23 from '../../../assets/img/hero/Trekking/23.jpg';
import Trek24 from '../../../assets/img/hero/Trekking/24.jpg';
import Trek25 from '../../../assets/img/hero/Trekking/25.jpeg';
import Trek26 from '../../../assets/img/hero/Trekking/26.jpeg';
import Trek27 from '../../../assets/img/hero/Trekking/27.jpeg';
import Trek28 from '../../../assets/img/hero/Trekking/28.jpg';
import Trek29 from '../../../assets/img/hero/Trekking/29.jpg';
import Trek30 from '../../../assets/img/hero/Trekking/30.jpg';
import Trek31 from '../../../assets/img/hero/Trekking/31.jpg';
import Trek32 from '../../../assets/img/hero/Trekking/32.webp';
import Trek33 from '../../../assets/img/hero/Trekking/33.jpg';
import Trek34 from '../../../assets/img/hero/Trekking/34.jpg';
import Trek35 from '../../../assets/img/hero/Trekking/35.jpg';
import Trek36 from '../../../assets/img/hero/Trekking/36.jpg';
import Trek37 from '../../../assets/img/hero/Trekking/37.jpg';
import Trek38 from '../../../assets/img/hero/Trekking/38.jpg';
import Trek39 from '../../../assets/img/hero/Trekking/39jpg.jpg';
import Trek40 from '../../../assets/img/hero/Trekking/40.jpg';
import Trek41 from '../../../assets/img/hero/Trekking/41.jpg';
import './Nepal.css';
const recommendations = [
  { slug: 'three-high-passes-trek', image: Trek1, title:'Muldai View Trek', duration: '19 Days', price: 'USD 1790' },
  { slug: 'everest-base-camp-trek', image: Trek2, title: 'Short Annapurna Circuit Trek', duration: '15 Days', price: 'USD 1390' },
  { slug: 'annapurna-panorama-trek', image: Trek3, title: 'Gosainkunda Holy Lake Trek Via Langtang Valley', duration: '12 Days', price: 'USD 1040' },
  { slug: 'ultra-luxury-trek-to-everest-base-camp', image: Trek4, title: 'Annapurna Circuit Trek with Tilicho Lake', duration: '13 Days', price: 'USD 5220' },
  { slug: 'upper-mustang-trek', image: Trek5, title: 'Short Annapurna Base Camp Trek', duration: '16 Days', price: 'USD 2395' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek6, title: 'Tamang Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek7, title: 'Annapurna Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' }, { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek6, title: 'Tamang Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek9, title: 'Annapurna Panorama Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek10, title: 'Ghorepani Poon Hill Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek11, title: 'Chisopani Nagakot Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek12, title: 'Khopra Danda Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek13, title: 'Pikey Peak Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek14, title: 'Ghorepani Poon Hill Yoga Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek15, title: 'Langtang Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek16, title: 'Ruby Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek17, title: 'Everest View Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek18, title: 'Rara Lake Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek19, title: 'Nar Phu Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek20, title: 'Everest Monasteries Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek21, title: 'Api Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek22, title: 'Everest Panorama Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek23, title: 'Larkya La, Kang La and Thorang La Pass Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek24, title: 'Far Western Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek25, title: 'Kanchenjunga Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek26, title: 'Tsum Valley and Manaslu Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek27, title: 'Makalu Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek28, title: 'Short Everest Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek29, title: 'Tsum Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek30, title: 'Lower Dolpo Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek31, title: 'Tare Bhir Day Hike', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek32, title: 'Nagarjun Jamacho Day Hike', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek33, title: 'Everest Base Camp Trek without Lukla flight', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek34, title: 'Manaslu Circuit via Larkey La Pass', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek35, title: 'Jiri to Everest Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek36, title: 'Ultra - Luxury Trek to Everest Base Camp', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek37, title: 'Heli Trek to Everest Base Camp', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek38, title: 'Everest Three High Passes Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek39, title: 'Everest Base Camp Trek with Gokyo Lake & Cho la pass', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek40, title: 'Everest Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek41, title: 'Makalu Base Camp Trek', duration: '18 Days', price: 'USD 1730' },

];

function Nepal() {
  return (
    <>
      <Headbar />
      <Navbar />
      <div className="Trek-section" style={{ backgroundImage: `url(${Trek1})` }}>
        <h1>Trekking in Nepal</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Nepal</h2>
        <div className="container">
          <div className="row mt-4">
            {recommendations.map((item) => (
              <div key={item.slug} className="col-lg-4 col-md-6 mb-4">
                <Link to={`/${item.slug}`} className="recommendation-link">
                  <div className="card">
                    <div className="zoom-image">
                      <img src={item.image} className="card-img-top img-fluid recommendation-image" alt={item.title} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration: {item.duration}
                      </p>
                      <div className="price-section">
                        <p className="price">USD <span className="blue-text">{item.price.split(' ')[1]}</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Nepal;

