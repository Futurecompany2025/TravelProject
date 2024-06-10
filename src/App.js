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
import WhyUs from './components/whyus';
import Blog from './components/blog';
import Headerbar from './components/Headbar';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import RecommendationDetails from './pages/RecommendationDetails';
import AboutUsPage from './pages/AboutUsPage';
import Recommendation from './components/recommendation';
import Nepal from './pages/Nepal';
import Bhutan from './pages/Bhutan';
import Tibet from './pages/Tibet';
import India from './pages/India';
import AboutUs from './components/aboutus';
import ContactUs from './pages/Contact-us';
import Destinations from './components/destinations';
import UpcomingTrips from './components/upcomingtrips';
import BlogDetails from './pages/blogdetails';
import TrekkingInNepal from './pages/Destinations/Nepal/TrekkingInNepal';
import TourInNepal from './pages/Destinations/Nepal/TourInNepal';
import LuxuryToursInNepal from './pages/Destinations/Nepal/LuxuryToursInNepal';
import PeakClimbingInNepal from './pages/Destinations/Nepal/PeakClimbingInNepal';
import ExpeditionsInNepal from './pages/Destinations/Nepal/ExpeditionsInNepal';
import OurTeam from './pages/Ourteam';
function Home() {
  return (
    <>
      <Headerbar />
      <Navbar />
      <SearchArea />
      <AboutUs />
      <Recommendation />
      <Destinations />
      <UpcomingTrips />
      <WhyUs />
      <Blog />
      <Footer />
    </>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect /home to the root page */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<RecommendationDetails />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/nepal" element={<Nepal />} /> 
        <Route path="/bhutan" element={<Bhutan />} />
        <Route path="/tibet" element={<Tibet />} />
        <Route path="/india" element={<India />} />
        <Route path="/nepal/trekking" element={<TrekkingInNepal />} />
        <Route path="/nepal/tour" element={<TourInNepal />} />
        <Route path="/nepal/luxury-tours" element={<LuxuryToursInNepal />} />
        <Route path="/nepal/peak-climbing" element={<PeakClimbingInNepal />} />
        <Route path="/nepal/expeditions" element={<ExpeditionsInNepal />} />
      </Routes>
    </Router>
  );
}
export default App;
