import React from 'react';
import './aboutus.css';
import { Link } from 'react-router-dom';
function AboutUs() {
  const trips = [
    { title: "Ultra - Luxury Trek to Everest Base Camp", price: "USD 5450", image: "/src/assets/img/hero/2.webp", route: "/ultra-luxury-trek-to-everest-base-camp" },
    { title: "Upper Mustang Trek", price: "USD 2395", image: "/src/assets/img/hero/3.jpg", route: "/upper-mustang-trek" },
    { title: "Mardi Himal Trek from Pokhara", price: "USD 300", image: "/src/assets/img/hero/4.jpg", route: "/mardi-himal-trek-from-pokhara" },
    { title: "Everest Base Camp Trek", price: "USD 1490", image: "/src/assets/img/hero/5.jpg", route: "/everest-base-camp-trek" },
    { title: "Everest Three High Passes Trek", price: "USD 1790", image: "/src/assets/img/hero/6.jpg", route: "/everest-three-high-passes-trek" },
    { title: "Ruby Valley Trek", price: "USD 830", image: "/src/assets/img/hero/7.jpg", route: "/ruby-valley-trek" },
    { title: "Luxury Trek to Annapurna", price: "USD 2540", image: "/src/assets/img/hero/8.jpg", route: "/luxury-trek-to-annapurna" },
    { title: "Exquisite Nepal Luxury Tour", price: "USD 19800", image: "/src/assets/img/hero/9.jpg", route: "/exquisite-nepal-luxury-tour" },
    { title: "Upper Mustang Motorcycle Tour", price: "USD 2950", image: "/src/assets/img/hero/10.jpg", route: "/upper-mustang-motorcycle-tour" }
  ];

  return (
    <div className="support-company-area support-padding fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="right-caption">
              <div className="section-tittle section-tittle2">
                <h2><span className="about-blue">About</span> <span className="us-green">Us</span></h2>
              </div>
              <div className="support-caption">
                <p>
                  J One Trekking And Expedition is a team of experienced and passionate people. We have started our career from the root level so we know what we are offering to our valued clients. We can help you plan hassle-free Trekking packages, Peak Climbing, Expeditions, Cultural Tours, Biking Tours, Yoga and meditation, Jungle Safari Tours, Rafting Tours, and Helicopter Tours with the best prices and value for your upcoming trip to the Himalayas.
                </p>
                <p>
                  With the experience of 23 years, we are ready to help you design your package as per your requirements. Every one of our packages is truly tailor-made, and our expert team has designed it for all ages, groups, families, and even solo travelers. We let you choose your package and leave you freedom.
                </p>
                <Link to="/about-us" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="trending-trips">
              <h3>IN CASE YOU MISSED IT</h3>
              <h4>Trending Trips of 2024</h4>
              <div className="trip-list">
                {trips.map((trip, index) => (
                  <Link to={trip.route} key={index} className="trip-item">
                    <img src={trip.image} alt={trip.title} className="trip-image" />
                    <div className="trip-info">
                      <span className="trip-title">{trip.title}</span>
                      <span className="trip-price">{trip.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
