import React from 'react';
import Header from './components/header';
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
import SupportCompanyArea from './components/SupportCompanyArea';
import TestimonialArea from './components/TestimonialArea';
import HomeBlogArea from './components/HomeBlogArea';
function App() {
  return (
    <div className="App">
      <Header />
      {/* Main Content */}
      <main>
        {/* Include other components here */}
        <HeroSlider />
        <OurServices />
        <FavouritePlaces />
        <VideoArea />
        <SupportCompanyArea />
        <TestimonialArea />
        <HomeBlogArea />
      </main>
      <Footer />
    </div>
  );
}
export default App;
