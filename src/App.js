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
import Blog from './components/blog';
import Headerbar from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendationDetails from './pages/RecommendationDetails';
import AboutUsPage from './pages/AboutUsPage';
import Recommendation from './components/recommendation';
import AboutUs from './components/aboutus';
import Destinations from './components/destinations';
import UpcomingTrips from './components/upcomingtrips';
import BlogDetails from './pages/blogdetails';
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
      <Blog />
      <Footer />
    </>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<RecommendationDetails />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
