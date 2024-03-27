import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/flaticon.css';
import './assets/css/slicknav.css';
import './assets/css/animate.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/themify-icons.css';
import './assets/css/slick.css';
import './assets/css/nice-select.css';
import './assets/css/style.css';
import Navbar from './components/navbar';
import SearchArea from './components/searchArea';
import Footer from './components/footer';
import AboutUs from './components/aboutus';
import UpcomingTrips from './components/upcomingtrips';
import Recommendation from './components/recommendation';
import Blog from './components/blog';
import Headerbar from './components/header';
import Destinations from './components/destinations';
function App() {
  return (
    <>
    <Headerbar />
      <Navbar />
      <SearchArea />
      <AboutUs  />
      <Recommendation />
      <Destinations />
      <UpcomingTrips />
      
       <Blog />
      <Footer />
      </>
  );
}
export default App;
