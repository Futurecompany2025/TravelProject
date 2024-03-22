import React from 'react';
import './aboutus.css'; // Import CSS file for additional styling
function AboutUs() {
  return (
    <div className="container"> {/* Use Bootstrap container class */}
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Trek Ways Nepal Pvt. Ltd. is a team of experienced and passionate people.
          We have started our career from the root level so we know what are we
          offering to our valued clients. We can help you plan hassle-free Trekking
          packages, Peak Climbing, Expeditions, Cultural Tours, Biking Tours, Yoga and
          meditation, Jungle Safari Tours, Rafting Tours, and Helicopter Tours with the
          best prices and value for your upcoming trip to the Himalayas.
        </p>
        <p>
          With the experience of 23 years, we are ready to help you to design your
          package as per your requirements. Every one of our packages is truly tailor-
          made and our expert team has designed it for all ages, groups, families, and
          even solo travelers. We let you choose your package and leave you freedom.
        </p>
        <button className="btn btn-primary">Learn More</button> {/* Use Bootstrap button class */}
      </div>
    </div>
  );
}
export default AboutUs;
