import React from 'react';
import './assets/css/style.css';
import './assets/css/animate.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/flaticon.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/nice-select.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/responsive.css';
import './assets/css/slick.css';
import './assets/css/slicknav.css';
import './assets/css/themify-icons.css';
import Footer from './components/footer';
import HeroSlider from './components/HeroSlider';
import OurServices from './components/OurServices';
import FavouritePlaces from './components/FavouritePlaces';
import VideoArea from './components/VideoArea';
import AboutUs from './components/aboutus';
import TestimonialArea from './components/TestimonialArea';
import HomeBlogArea from './components/HomeBlogArea';
import Navbar  from './components/navbar';
import SearchArea from './components/searchArea';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <AboutUs/>
     <HomeBlogArea/>
     <SearchArea/>
      <Footer/>
      <HeroSlider/>
      <OurServices/>
      <FavouritePlaces/>
      <VideoArea/>
      <TestimonialArea/>
    </div>
  );
}
export default App;
