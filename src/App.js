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
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Helicoptereverestbase from './pages/Day Tour/Helicoptereverestbase';
import KakaniDayHike from './pages/Day Tour/KakaniDayHike';
import KathmanduKirtipurDayTour from './pages/Day Tour/KathmanduKirtipurDayTour';
import AnnapurnaBaseCampHelicopter from './pages/Day Tour/AnnapurnaBaseCampHelicopterTour';
import WhiteWaterDayRafting from './pages/Day Tour/WhiteWaterDayRafting';
import MuktinathHelicopterTour  from './pages/Day Tour/MuktinathHelicopterTour';
import LangtangHelicopterTour  from './pages/Day Tour/LangtangHelicopterTour';
import KathmanduAndPatanDayTour from './pages/Day Tour/KathmanduPatanDayTour';
import ShivapuriDayHike from './pages/Day Tour/ShivapuriDayHike';
import TarebhirdayHike from './pages/Day Tour/TareBhirDayHike';
import FiveUNESCOHeritageSites from './pages/Day Tour/UNESCOWorldHeritageSites';
import FamilyTrip from './pages/Travel Style/FamilyTrip';
import CorporateTravel from './pages/Travel Style/CorporateTravel';
import SoloTravel from './pages/Travel Style/SoloTravel';
import GroupTravel from './pages/Travel Style/GroupTravel';
import Religious from './pages/Travel Style/Relegious';
import OurTeam from './pages/Ourteam';
import Partner from './pages/partner';
import Paynow from './pages/paynow'
import Documents from './pages/Documents';
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
        {/* Define more specific routes before less specific ones */}
        <Route path="/helicopter-everest-base" element={<Helicoptereverestbase />} />
        <Route path="/kakani-day-hike" element={<KakaniDayHike />} />
        <Route path="/kathmandu-kirtipur-day-tour" element={<KathmanduKirtipurDayTour />} />
        <Route path="/white-water-day-rafting" element={<WhiteWaterDayRafting />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/nepal" element={<Nepal />} />
        <Route path="/bhutan" element={<Bhutan />} />
        <Route path="/tibet" element={<Tibet />} />
        <Route path="/india" element={<India />} />
        <Route path="/nepal/trekking" element={<TrekkingInNepal />} />
        <Route path="/nepal/tour" element={<TourInNepal />} />
        <Route path="/nepal/luxury-tours" element={<LuxuryToursInNepal />} />
        <Route path="/nepal/peak-climbing" element={<PeakClimbingInNepal />} />
        <Route path="/nepal/expeditions" element={<ExpeditionsInNepal />} />
        {/* Move this to the end to avoid conflict with other routes */}
        <Route path="/annapurna-base-camp" element={<AnnapurnaBaseCampHelicopter />} />
        <Route path="/muktinath-helicopter-tour" element={<MuktinathHelicopterTour />} />
        <Route path="/langtang-helicopter-tour" element={<LangtangHelicopterTour />} />
        <Route path="/kathmandu-patan-day-tour" element={<KathmanduAndPatanDayTour />} />
        <Route path="/shivapuri-day-hike" element={<ShivapuriDayHike />} />
        <Route path="/tare-bhir-day-hike" element={<TarebhirdayHike />} />
        <Route path="/5-unesco-world-heritage-sites" element={<FiveUNESCOHeritageSites />} />
        <Route path="/:slug" element={<RecommendationDetails />} />
        <Route path="/travel-style/family-trip" element={<FamilyTrip />} />
         <Route path="/travel-style/corporate-travel" element={<CorporateTravel />} />
                <Route path="/travel-style/solo-travel" element={<SoloTravel />} />
                <Route path="/travel-style/group-travel" element={<GroupTravel />} />
                <Route path="/travel-style/religious" element={<Religious />} />
                <Route path="/partner-with-us" element={<Partner />} />
                <Route path= "/pay-now" element={<Paynow />} />
      </Routes>
    </Router>
  );
}
export default App;
