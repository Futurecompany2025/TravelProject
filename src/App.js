import React from 'react';
import Header from './components/header';
import './assets/css/style.css';
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
