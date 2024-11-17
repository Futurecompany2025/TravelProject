<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import Headbar from '../components/Headbar';
import Footer from '../components/footer';
// Import all the images for each section
import Trek1 from '../assets/img/hero/Trekking/1.jpeg';
import Trek2 from '../assets/img/hero/Trekking/2.jpeg';
import Trek3 from '../assets/img/hero/Trekking/3.jpeg';
import Trek4 from '../assets/img/hero/Trekking/4.jpeg';
import Trek5 from '../assets/img/hero/Trekking/5.jpeg';
import Trek6 from '../assets/img/hero/Trekking/6.jpeg';
import Trek7 from '../assets/img/hero/Trekking/7.jpeg';
import Trek8 from '../assets/img/hero/Trekking/8.jpeg';
import Trek9 from '../assets/img/hero/Trekking/9.jpeg';
import Trek10 from '../assets/img/hero/Trekking/10.jpeg';
import Trek11 from '../assets/img/hero/Trekking/11.jpeg';
import Trek12 from '../assets/img/hero/Trekking/12.jpeg';
import Trek13 from '../assets/img/hero/Trekking/13.jpeg';
import Trek14 from '../assets/img/hero/Trekking/14.jpeg';
import Trek15 from '../assets/img/hero/Trekking/15.jpeg';
import Trek16 from '../assets/img/hero/Trekking/16.jpeg';
import Trek17 from '../assets/img/hero/Trekking/17.jpeg';
import Trek18 from '../assets/img/hero/Trekking/18.jpg';
import Trek19 from '../assets/img/hero/Trekking/19.jpg';
import Trek20 from '../assets/img/hero/Trekking/20.jpeg';
import Trek21 from '../assets/img/hero/Trekking/21.jpeg';
import Trek22 from '../assets/img/hero/Trekking/22.jpeg';
import Trek23 from '../assets/img/hero/Trekking/23.jpg';
import Trek24 from '../assets/img/hero/Trekking/24.jpg';
import Trek25 from '../assets/img/hero/Trekking/25.jpeg';
import Trek26 from '../assets/img/hero/Trekking/26.jpeg';
import Trek27 from '../assets/img/hero/Trekking/27.jpeg';
import Trek28 from '../assets/img/hero/Trekking/28.jpg';
import Trek29 from '../assets/img/hero/Trekking/29.jpg';
import Trek30 from '../assets/img/hero/Trekking/30.jpg';
import Trek31 from '../assets/img/hero/Trekking/31.jpg';
import Trek32 from '../assets/img/hero/Trekking/32.webp';
import Trek33 from '../assets/img/hero/Trekking/33.jpg';
import Trek34 from '../assets/img/hero/Trekking/34.jpg';
import Trek35 from '../assets/img/hero/Trekking/35.jpg';
import Trek36 from '../assets/img/hero/Trekking/36.jpg';
import Trek37 from '../assets/img/hero/Trekking/37.jpg';
import Trek38 from '../assets/img/hero/Trekking/38.jpg';
import Trek39 from '../assets/img/hero/Trekking/39jpg.jpg';
import Trek40 from '../assets/img/hero/Trekking/40.jpg';
import Trek41 from '../assets/img/hero/Trekking/41.jpg';

import Tour1 from '../assets/img/hero/Tour/1.jpeg';
import Tour2 from '../assets/img/hero/Tour/2.jpg';
import Tour3 from '../assets/img/hero/Tour/3.jpeg';
import Tour4 from '../assets/img/hero/Tour/4.jpeg';
import Tour5 from '../assets/img/hero/Tour/5 .jpg';
import Tour6 from '../assets/img/hero/Tour/6.jpg';
import Tour7 from '../assets/img/hero/Tour/7.jpg';
import Tour8 from '../assets/img/hero/Tour/8.jpg';
import Tour9 from '../assets/img/hero/Tour/9.jpg';
import Tour10 from '../assets/img/hero/Tour/10.jpg';
import Tour11 from '../assets/img/hero/Tour/11.jpg';
import Tour12 from '../assets/img/hero/Tour/12.jpg';
// ... (all other Tour images)
import Luxury2 from '../assets/img/hero/Luxury/2.jpeg';
import Luxury3 from '../assets/img/hero/Luxury/3.jpeg';
import Luxury4 from '../assets/img/hero/Luxury/4.jpg';
import Luxury5 from '../assets/img/hero/Luxury/5.jpeg';
import Luxury6 from '../assets/img/hero/Luxury/6.jpg';
import Luxury7 from '../assets/img/hero/Luxury/7.jpg';
// ... (all other Luxury images)
import Peak1 from '../assets/img/hero/Peak/1.jpg';
import Peak2 from '../assets/img/hero/Peak/2.jpg';
import Peak3 from '../assets/img/hero/Peak/3.jpeg';
import Peak4 from '../assets/img/hero/Peak/4.jpeg';
import Peak5 from '../assets/img/hero/Peak/5.jpeg';
import Peak6 from '../assets/img/hero/Peak/6.jpeg';
const trekkingRecommendations = [
  { slug: 'muldai-view-trek', image: Trek1, title: 'Muldai View Trek', duration: '19 Days', price: 'USD 1790' },
  { slug: 'short-annapurna-circuit-trek', image: Trek2, title: 'Short Annapurna Circuit Trek', duration: '15 Days', price: 'USD 1390' },
  { slug: 'gosainkunda-holy-lake-trek-via-langtang-valley', image: Trek3, title: 'Gosainkunda Holy Lake Trek Via Langtang Valley', duration: '12 Days', price: 'USD 1040' },
  { slug: 'annapurna-circuit-trek-with-tilicho-lake', image: Trek4, title: 'Annapurna Circuit Trek with Tilicho Lake', duration: '13 Days', price: 'USD 5220' },
  { slug: 'short-annapurna-base-camp-trek', image: Trek5, title: 'Short Annapurna Base Camp Trek', duration: '16 Days', price: 'USD 2395' },
  { slug: 'tamang-heritage-trail-trek', image: Trek6, title: 'Tamang Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'annapurna-circuit-trek', image: Trek7, title: 'Annapurna Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek-from-pokhara', image: Trek8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' }, { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek6, title: 'Tamang Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'annapurna-panorama-trek', image: Trek9, title: 'Annapurna Panorama Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'ghorepani-poon-hill-trek', image: Trek10, title: 'Ghorepani Poon Hill Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'chisopani-nagarkot-trek', image: Trek11, title: 'Chisopani Nagakot Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'khopra-danda-trek', image: Trek12, title: 'Khopra Danda Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'pikey-peak-trek', image: Trek13, title: 'Pikey Peak Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'ghorepani-poon-hill-yoga-trek', image: Trek14, title: 'Ghorepani Poon Hill Yoga Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'langtang-valley-trek', image: Trek15, title: 'Langtang Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'ruby-valley-trek', image: Trek16, title: 'Ruby Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-view-trek', image: Trek17, title: 'Everest View Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'rara-lake-trek', image: Trek18, title: 'Rara Lake Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'nar-phu-valley-trek', image: Trek19, title: 'Nar Phu Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-monasteries-trek', image: Trek20, title: 'Everest Monasteries Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'api-base-camp-trek', image: Trek21, title: 'Api Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-panorama-trek', image: Trek22, title: 'Everest Panorama Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'larkya-la-kang-la-thorang-la-pass-trek', image: Trek23, title: 'Larkya La, Kang La and Thorang La Pass Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'far-western-heritage-trail-trek', image: Trek24, title: 'Far Western Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'kanchenjunga-circuit-trek', image: Trek25, title: 'Kanchenjunga Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'tsum-valley-and-manaslu-circuit-trek', image: Trek26, title: 'Tsum Valley and Manaslu Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'makalu-base-camp-trek', image: Trek27, title: 'Makalu Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'short-everest-base-camp-trek', image: Trek28, title: 'Short Everest Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'tsum-valley-trek', image: Trek29, title: 'Tsum Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'lower-dolpo-trek', image: Trek30, title: 'Lower Dolpo Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'tare-bhir-day-hike', image: Trek31, title: 'Tare Bhir Day Hike', duration: '18 Days', price: 'USD 1730' },
  { slug: 'nagarjun-jamacho-day-hike', image: Trek32, title: 'Nagarjun Jamacho Day Hike', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-without-lukla-flight', image: Trek33, title: 'Everest Base Camp Trek without Lukla flight', duration: '18 Days', price: 'USD 1730' },
  { slug: 'manaslu-circuit-larkey-la-pass-trek', image: Trek34, title: 'Manaslu Circuit via Larkey La Pass', duration: '18 Days', price: 'USD 1730' },
  { slug: 'jiri-to-everest-base-camp', image: Trek35, title: 'Jiri to Everest Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'ultra-luxury-trek-to-everest-base-camp', image: Trek36, title: 'Ultra - Luxury Trek to Everest Base Camp', duration: '18 Days', price: 'USD 1730' },
  { slug: 'heli-trek-to-everest-base-camp', image: Trek37, title: 'Heli Trek to Everest Base Camp', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-three-high-passes-trek', image: Trek38, title: 'Everest Three High Passes Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake-cho-la-pass', image: Trek39, title: 'Everest Base Camp Trek with Gokyo Lake & Cho la pass', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek', image: Trek40, title: 'Everest Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'makalu-base-camp-trek', image: Trek41, title: 'Makalu Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  // ... (other trekking recommendations)
];

const tourRecommendations = [
  { slug: 'kathmandu-and-pokhara-tour', image: Tour1, title: 'Kathmandu and Pokhara Tour', duration: '19 Days', price: 'USD 1790' },
  { slug: 'all-nepal-tour', image: Tour2, title: 'All Nepal Tour', duration: '15 Days', price: 'USD 1390' },
  { slug: 'best-of-nepal-tour', image: Tour3, title: 'Best of Nepal Tour', duration: '12 Days', price: 'USD 1040' },
  { slug: 'muktinath-tour-with-jungle-safari', image: Tour4, title: 'Muktinath Tour with Jungle Safari', duration: '13 Days', price: 'USD 5220' },
  { slug: 'upper-mustang-motorcycle-tour', image: Tour5, title: 'Upper Mustang Motorcycle Tour', duration: '16 Days', price: 'USD 2395' },
  { slug: '5-un', image: Tour6, title: '5 UNESCO World Heritage Sites of Kathmandu Day Tour', duration: '1 Day', price: 'USD 110' },
  { slug: 'safari-at-bardia-national-park', image: Tour7, title: 'Safari at Bardia National Park', duration: '18 Days', price: 'USD 1730' },
  { slug: 'kakani-day-hike', image: Tour8, title: 'Kakani Day Hike', duration: '1 Day', price: 'USD 100' },
  { slug: 'white-water-day-rafting', image: Tour9, title: 'White Water Day Rafting', duration: '1 Day', price: 'USD 120' },
  { slug: 'kathmandu-and-patan-day-tour', image: Tour10, title: 'Kathmandu and Patan Day Tour', duration: '1 Day', price: 'USD 80' },
  { slug: 'shivapuri-day-hike', image: Tour11, title: 'Shivapuri Day Hike', duration: '1 Day', price: 'USD 90' },
  { slug: 'kathmandu-and-kirtipur-day-tour', image: Tour12, title: 'Kathmandu and Kirtipur Day Tour', duration: '1 Day', price: 'USD 85' },
];
const luxuryRecommendations = [
  { slug: 'kathmandu-and-pokhara-tour', image: Luxury2, title: 'Muktinath Helicopter Tour', duration: '19 Days', price: 'USD 1790' },
  { slug: 'all-nepal-tour', image: Luxury3, title: 'Luxury Trek To Annapurna', duration: '15 Days', price: 'USD 1390' },
  { slug: 'best-of-nepal-tour', image: Luxury4, title: 'Exquisite Nepal Luxury Tour', duration: '12 Days', price: 'USD 1040' },
  { slug: 'muktinath-tour-with-jungle-safari', image: Luxury5, title: 'Annapurna Base Camp Helicopter Tour', duration: '13 Days', price: 'USD 5220' },
  { slug: 'upper-mustang-motorcycle-tour', image: Luxury6, title: 'Langtang Helicopter Tour', duration: '16 Days', price: 'USD 2395' },
  { slug: '5-un', image: Luxury7, title: 'Helicopter Tour to Everest Base Camp', duration: '1 Day', price: 'USD 110' }
];

const peakRecommendations = [
  { slug: 'kyajo-ri-peak-climbing', image: Peak1, title: 'Kyajo Ri Peak climbing', duration: '19 Days', price: 'USD 1790' },
  { slug: 'island-peak-climbing-with-everest-base-camp', image: Peak2, title: 'Island Peak Climbing with Everest Base Camp', duration: '15 Days', price: 'USD 1390' },
  { slug: 'mera-peak-and-island-peak-climbing-via-amphu-laptsa-pass', image: Peak3, title: 'Mera Peak and Island peak Climbing via Amphu Laptsa pass', duration: '12 Days', price: 'USD 1040' },
  { slug: 'island-peak-climbing', image: Peak4, title: 'Island peak Climbing', duration: '13 Days', price: 'USD 5220' },
  { slug: 'mera-peak-climbing', image: Peak5, title: 'Mera Peak Climbing', duration: '16 Days', price: 'USD 2395' },
  { slug: 'lobuche-peak-climbing', image: Peak6, title: 'Lobuche Peak Climbing', duration: '1 Day', price: 'USD 110' }
];

function Nepal() {
  return (
    <>
    <Headbar />
      <Navbar />
     
      {/* Trekking Section */}
      <div className="Trek-section" style={{ backgroundImage: `url(${Trek1})` }}>
        <h1>Trekking in Nepal</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Trekking in Nepal</h2>
        <div className="container">
          <div className="row mt-4">
            {trekkingRecommendations.map((item) => (
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

      {/* Tour Section */}
      <div className="Tour-section" style={{ backgroundImage: `url(${Tour1})` }}>
        <h1>Tour in Nepal</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Tours in Nepal</h2>
        <div className="container">
          <div className="row mt-4">
            {tourRecommendations.map((item) => (
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

      {/* Luxury Tours Section */}
      <div className="Luxury-section" style={{ backgroundImage: `url(${Luxury2})` }}>
        <h1>Luxury Tours in Nepal</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Luxury Tours in Nepal</h2>
        <div className="container">
          <div className="row mt-4">
            {luxuryRecommendations.map((item) => (
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

      {/* Peak Climbing Section */}
      <div className="Peak-section" style={{ backgroundImage: `url(${Peak1})` }}>
        <h1>Peak Climbing in Nepal</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Peak Climbing in Nepal</h2>
        <div className="container">
          <div className="row mt-4">
            {peakRecommendations.map((item) => (
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
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import Headbar from '../components/Headbar';
import Footer from '../components/footer';
// Import all the images for each section
import Trek1 from '../assets/img/hero/Trekking/1.jpeg';
import Trek2 from '../assets/img/hero/Trekking/2.jpeg';
import Trek3 from '../assets/img/hero/Trekking/3.jpeg';
import Trek4 from '../assets/img/hero/Trekking/4.jpeg';
import Trek5 from '../assets/img/hero/Trekking/5.jpeg';
import Trek6 from '../assets/img/hero/Trekking/6.jpeg';
import Trek7 from '../assets/img/hero/Trekking/7.jpeg';
import Trek8 from '../assets/img/hero/Trekking/8.jpeg';
import Trek9 from '../assets/img/hero/Trekking/9.jpeg';
import Trek10 from '../assets/img/hero/Trekking/10.jpeg';
import Trek11 from '../assets/img/hero/Trekking/11.jpeg';
import Trek12 from '../assets/img/hero/Trekking/12.jpeg';
import Trek13 from '../assets/img/hero/Trekking/13.jpeg';
import Trek14 from '../assets/img/hero/Trekking/14.jpeg';
import Trek15 from '../assets/img/hero/Trekking/15.jpeg';
import Trek16 from '../assets/img/hero/Trekking/16.jpeg';
import Trek17 from '../assets/img/hero/Trekking/17.jpeg';
import Trek18 from '../assets/img/hero/Trekking/18.jpg';
import Trek19 from '../assets/img/hero/Trekking/19.jpg';
import Trek20 from '../assets/img/hero/Trekking/20.jpeg';
import Trek21 from '../assets/img/hero/Trekking/21.jpeg';
import Trek22 from '../assets/img/hero/Trekking/22.jpeg';
import Trek23 from '../assets/img/hero/Trekking/23.jpg';
import Trek24 from '../assets/img/hero/Trekking/24.jpg';
import Trek25 from '../assets/img/hero/Trekking/25.jpeg';
import Trek26 from '../assets/img/hero/Trekking/26.jpeg';
import Trek27 from '../assets/img/hero/Trekking/27.jpeg';
import Trek28 from '../assets/img/hero/Trekking/28.jpg';
import Trek29 from '../assets/img/hero/Trekking/29.jpg';
import Trek30 from '../assets/img/hero/Trekking/30.jpg';
import Trek31 from '../assets/img/hero/Trekking/31.jpg';
import Trek32 from '../assets/img/hero/Trekking/32.webp';
import Trek33 from '../assets/img/hero/Trekking/33.jpg';
import Trek34 from '../assets/img/hero/Trekking/34.jpg';
import Trek35 from '../assets/img/hero/Trekking/35.jpg';
import Trek36 from '../assets/img/hero/Trekking/36.jpg';
import Trek37 from '../assets/img/hero/Trekking/37.jpg';
import Trek38 from '../assets/img/hero/Trekking/38.jpg';
import Trek39 from '../assets/img/hero/Trekking/39jpg.jpg';
import Trek40 from '../assets/img/hero/Trekking/40.jpg';
import Trek41 from '../assets/img/hero/Trekking/41.jpg';

import Tour1 from '../assets/img/hero/Tour/1.jpeg';
import Tour2 from '../assets/img/hero/Tour/2.jpg';
import Tour3 from '../assets/img/hero/Tour/3.jpeg';
import Tour4 from '../assets/img/hero/Tour/4.jpeg';
import Tour5 from '../assets/img/hero/Tour/5 .jpg';
import Tour6 from '../assets/img/hero/Tour/6.jpg';
import Tour7 from '../assets/img/hero/Tour/7.jpg';
import Tour8 from '../assets/img/hero/Tour/8.jpg';
import Tour9 from '../assets/img/hero/Tour/9.jpg';
import Tour10 from '../assets/img/hero/Tour/10.jpg';
import Tour11 from '../assets/img/hero/Tour/11.jpg';
import Tour12 from '../assets/img/hero/Tour/12.jpg';
// ... (all other Tour images)
import Luxury2 from '../assets/img/hero/Luxury/2.jpeg';
import Luxury3 from '../assets/img/hero/Luxury/3.jpeg';
import Luxury4 from '../assets/img/hero/Luxury/4.jpg';
import Luxury5 from '../assets/img/hero/Luxury/5.jpeg';
import Luxury6 from '../assets/img/hero/Luxury/6.jpg';
import Luxury7 from '../assets/img/hero/Luxury/7.jpg';
// ... (all other Luxury images)
import Peak1 from '../assets/img/hero/Peak/1.jpg';
import Peak2 from '../assets/img/hero/Peak/2.jpg';
import Peak3 from '../assets/img/hero/Peak/3.jpeg';
import Peak4 from '../assets/img/hero/Peak/4.jpeg';
import Peak5 from '../assets/img/hero/Peak/5.jpeg';
import Peak6 from '../assets/img/hero/Peak/6.jpeg';
const trekkingRecommendations = [
  { slug: 'muldai-view-trek', image: Trek1, title: 'Muldai View Trek', duration: '19 Days', price: 'USD 1790' },
  { slug: 'short-annapurna-circuit-trek', image: Trek2, title: 'Short Annapurna Circuit Trek', duration: '15 Days', price: 'USD 1390' },
  { slug: 'gosainkunda-holy-lake-trek-via-langtang-valley', image: Trek3, title: 'Gosainkunda Holy Lake Trek Via Langtang Valley', duration: '12 Days', price: 'USD 1040' },
  { slug: 'annapurna-circuit-trek-with-tilicho-lake', image: Trek4, title: 'Annapurna Circuit Trek with Tilicho Lake', duration: '13 Days', price: 'USD 5220' },
  { slug: 'short-annapurna-base-camp-trek', image: Trek5, title: 'Short Annapurna Base Camp Trek', duration: '16 Days', price: 'USD 2395' },
  { slug: 'tamang-heritage-trail-trek', image: Trek6, title: 'Tamang Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'annapurna-circuit-trek', image: Trek7, title: 'Annapurna Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek-from-pokhara', image: Trek8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' }, { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Trek6, title: 'Tamang Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'annapurna-panorama-trek', image: Trek9, title: 'Annapurna Panorama Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'ghorepani-poon-hill-trek', image: Trek10, title: 'Ghorepani Poon Hill Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'chisopani-nagarkot-trek', image: Trek11, title: 'Chisopani Nagakot Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'khopra-danda-trek', image: Trek12, title: 'Khopra Danda Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'pikey-peak-trek', image: Trek13, title: 'Pikey Peak Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'ghorepani-poon-hill-yoga-trek', image: Trek14, title: 'Ghorepani Poon Hill Yoga Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'langtang-valley-trek', image: Trek15, title: 'Langtang Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'ruby-valley-trek', image: Trek16, title: 'Ruby Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-view-trek', image: Trek17, title: 'Everest View Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'rara-lake-trek', image: Trek18, title: 'Rara Lake Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'nar-phu-valley-trek', image: Trek19, title: 'Nar Phu Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-monasteries-trek', image: Trek20, title: 'Everest Monasteries Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'api-base-camp-trek', image: Trek21, title: 'Api Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-panorama-trek', image: Trek22, title: 'Everest Panorama Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'larkya-la-kang-la-thorang-la-pass-trek', image: Trek23, title: 'Larkya La, Kang La and Thorang La Pass Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'far-western-heritage-trail-trek', image: Trek24, title: 'Far Western Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'kanchenjunga-circuit-trek', image: Trek25, title: 'Kanchenjunga Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'tsum-valley-and-manaslu-circuit-trek', image: Trek26, title: 'Tsum Valley and Manaslu Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'makalu-base-camp-trek', image: Trek27, title: 'Makalu Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'short-everest-base-camp-trek', image: Trek28, title: 'Short Everest Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'tsum-valley-trek', image: Trek29, title: 'Tsum Valley Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'lower-dolpo-trek', image: Trek30, title: 'Lower Dolpo Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'tare-bhir-day-hike', image: Trek31, title: 'Tare Bhir Day Hike', duration: '18 Days', price: 'USD 1730' },
  { slug: 'nagarjun-jamacho-day-hike', image: Trek32, title: 'Nagarjun Jamacho Day Hike', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-without-lukla-flight', image: Trek33, title: 'Everest Base Camp Trek without Lukla flight', duration: '18 Days', price: 'USD 1730' },
  { slug: 'manaslu-circuit-larkey-la-pass-trek', image: Trek34, title: 'Manaslu Circuit via Larkey La Pass', duration: '18 Days', price: 'USD 1730' },
  { slug: 'jiri-to-everest-base-camp', image: Trek35, title: 'Jiri to Everest Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'ultra-luxury-trek-to-everest-base-camp', image: Trek36, title: 'Ultra - Luxury Trek to Everest Base Camp', duration: '18 Days', price: 'USD 1730' },
  { slug: 'heli-trek-to-everest-base-camp', image: Trek37, title: 'Heli Trek to Everest Base Camp', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-three-high-passes-trek', image: Trek38, title: 'Everest Three High Passes Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek-with-gokyo-lake-cho-la-pass', image: Trek39, title: 'Everest Base Camp Trek with Gokyo Lake & Cho la pass', duration: '18 Days', price: 'USD 1730' },
  { slug: 'everest-base-camp-trek', image: Trek40, title: 'Everest Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'makalu-base-camp-trek', image: Trek41, title: 'Makalu Base Camp Trek', duration: '18 Days', price: 'USD 1730' },
  // ... (other trekking recommendations)
];

const tourRecommendations = [
  { slug: 'kathmandu-and-pokhara-tour', image: Tour1, title: 'Kathmandu and Pokhara Tour', duration: '19 Days', price: 'USD 1790' },
  { slug: 'all-nepal-tour', image: Tour2, title: 'All Nepal Tour', duration: '15 Days', price: 'USD 1390' },
  { slug: 'best-of-nepal-tour', image: Tour3, title: 'Best of Nepal Tour', duration: '12 Days', price: 'USD 1040' },
  { slug: 'muktinath-tour-with-jungle-safari', image: Tour4, title: 'Muktinath Tour with Jungle Safari', duration: '13 Days', price: 'USD 5220' },
  { slug: 'upper-mustang-motorcycle-tour', image: Tour5, title: 'Upper Mustang Motorcycle Tour', duration: '16 Days', price: 'USD 2395' },
  { slug: '5-un', image: Tour6, title: '5 UNESCO World Heritage Sites of Kathmandu Day Tour', duration: '1 Day', price: 'USD 110' },
  { slug: 'safari-at-bardia-national-park', image: Tour7, title: 'Safari at Bardia National Park', duration: '18 Days', price: 'USD 1730' },
  { slug: 'kakani-day-hike', image: Tour8, title: 'Kakani Day Hike', duration: '1 Day', price: 'USD 100' },
  { slug: 'white-water-day-rafting', image: Tour9, title: 'White Water Day Rafting', duration: '1 Day', price: 'USD 120' },
  { slug: 'kathmandu-and-patan-day-tour', image: Tour10, title: 'Kathmandu and Patan Day Tour', duration: '1 Day', price: 'USD 80' },
  { slug: 'shivapuri-day-hike', image: Tour11, title: 'Shivapuri Day Hike', duration: '1 Day', price: 'USD 90' },
  { slug: 'kathmandu-and-kirtipur-day-tour', image: Tour12, title: 'Kathmandu and Kirtipur Day Tour', duration: '1 Day', price: 'USD 85' },
];
const luxuryRecommendations = [
  { slug: 'kathmandu-and-pokhara-tour', image: Luxury2, title: 'Muktinath Helicopter Tour', duration: '19 Days', price: 'USD 1790' },
  { slug: 'all-nepal-tour', image: Luxury3, title: 'Luxury Trek To Annapurna', duration: '15 Days', price: 'USD 1390' },
  { slug: 'best-of-nepal-tour', image: Luxury4, title: 'Exquisite Nepal Luxury Tour', duration: '12 Days', price: 'USD 1040' },
  { slug: 'muktinath-tour-with-jungle-safari', image: Luxury5, title: 'Annapurna Base Camp Helicopter Tour', duration: '13 Days', price: 'USD 5220' },
  { slug: 'upper-mustang-motorcycle-tour', image: Luxury6, title: 'Langtang Helicopter Tour', duration: '16 Days', price: 'USD 2395' },
  { slug: '5-un', image: Luxury7, title: 'Helicopter Tour to Everest Base Camp', duration: '1 Day', price: 'USD 110' }
];

const peakRecommendations = [
  { slug: 'kyajo-ri-peak-climbing', image: Peak1, title: 'Kyajo Ri Peak climbing', duration: '19 Days', price: 'USD 1790' },
  { slug: 'island-peak-climbing-with-everest-base-camp', image: Peak2, title: 'Island Peak Climbing with Everest Base Camp', duration: '15 Days', price: 'USD 1390' },
  { slug: 'mera-peak-and-island-peak-climbing-via-amphu-laptsa-pass', image: Peak3, title: 'Mera Peak and Island peak Climbing via Amphu Laptsa pass', duration: '12 Days', price: 'USD 1040' },
  { slug: 'island-peak-climbing', image: Peak4, title: 'Island peak Climbing', duration: '13 Days', price: 'USD 5220' },
  { slug: 'mera-peak-climbing', image: Peak5, title: 'Mera Peak Climbing', duration: '16 Days', price: 'USD 2395' },
  { slug: 'lobuche-peak-climbing', image: Peak6, title: 'Lobuche Peak Climbing', duration: '1 Day', price: 'USD 110' }
];

function Nepal() {
  return (
    <>
    <Headbar />
      <Navbar />
     
      {/* Trekking Section */}
      <div className="Trek-section" style={{ backgroundImage: `url(${Trek1})` }}>
        <h1>Trekking in Nepal</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Trekking in Nepal</h2>
        <div className="container">
          <div className="row mt-4">
            {trekkingRecommendations.map((item) => (
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

      {/* Tour Section */}
      <div className="Tour-section" style={{ backgroundImage: `url(${Tour1})` }}>
        <h1>Tour in Nepal</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Tours in Nepal</h2>
        <div className="container">
          <div className="row mt-4">
            {tourRecommendations.map((item) => (
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

      {/* Luxury Tours Section */}
      <div className="Luxury-section" style={{ backgroundImage: `url(${Luxury2})` }}>
        <h1>Luxury Tours in Nepal</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Luxury Tours in Nepal</h2>
        <div className="container">
          <div className="row mt-4">
            {luxuryRecommendations.map((item) => (
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

      {/* Peak Climbing Section */}
      <div className="Peak-section" style={{ backgroundImage: `url(${Peak1})` }}>
        <h1>Peak Climbing in Nepal</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Peak Climbing in Nepal</h2>
        <div className="container">
          <div className="row mt-4">
            {peakRecommendations.map((item) => (
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
>>>>>>> e8a3bcc (Initial commit on shikhar branch)
