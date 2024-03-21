

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
import Headerbar from './components/header';
import SearchArea from './components/searchArea';
import Destinations from './components/destinations';
import WhyUs from './components/whyus';
import Footer from './components/footer';
import SupportCompanyArea from './components/aboutjs';
import FavouritePlaces from './favoritePlaces';
 



function App() {
  return (
  <>

<Headerbar />
<Navbar />
<SearchArea />
<SupportCompanyArea />
<WhyUs />
<FavouritePlaces />


        <Destinations />
       
        <Footer />

       



        
    
  
  
  
  </>
  );
}
export default App;

 {/* <div id="preloader-">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="assets/img/logo/logo.png" alt=""/>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Preloader Start --> */}