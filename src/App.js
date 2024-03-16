

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

import service1 from './assets/img/service/services1.jpg';
import service2 from './assets/img/service/services2.jpg';
import service3 from './assets/img/service/services3.jpg';
import service4 from './assets/img/service/services4.jpg';
import service5 from './assets/img/service/services5.jpg';
import service6 from './assets/img/service/services6.jpg';
import hero1 from './assets/img/hero/h1_hero.jpg';
import logo from './assets/img/logo/logo.png'; 
 



function App() {
  return (
  <>
  
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
    <header>
        {/* <!-- Header Start --> */}
       <div className="header-area">
            <div className="main-header ">
                <div className="header-top top-bg d-none d-lg-block">
                   <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-8">
                            <div className="header-info-left">
                                <ul>                          
                                    <li>needhelp@gotrip.com</li>
                                    <li>666 569 025077</li>
                                    <li>broklyn street new york</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="header-info-right f-right">
                                <ul className="header-social">    
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                   <li> <a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                       </div>
                   </div>
                </div>
               <div className="header-bottom  header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* <!-- Logo --> */}
                            <div className="col-xl-2 col-lg-2 col-md-1">
                                <div className="logo">
                                  <a href="index.html"><img src={logo} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10">
                                {/* <!-- Main-menu --> */}
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav>               
                                        <ul id="navigation">                                                                                                                                     
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About US</a></li>
                                            <li><a href="packages.html">Package</a></li>
                                            <li><a href="blog.html">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li><a href="elements.html">Element</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* <!-- Mobile Menu --> */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
       </div>
        {/* <!-- Header End --> */}
    </header>

    <main>

        {/* <!-- slider Area Start--> */}
        <div className="slider-area ">
            {/* <!-- Mobile Menu --> */}
            <div className="slider-active">
                <div className="single-slider hero-overly  slider-height d-flex align-items-center" data-background="assets/img/hero/h1_hero.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-9 col-md-9">
                                <div className="hero__caption">
                                    <h1>Find your <span>Next tour!</span> </h1>
                                    <p>Where would you like to go?</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Search Box --> */}
                        <div className="row">
                            <div className="col-xl-12">
                              
                                <form action="#" className="search-box">
                                    <div className="input-form mb-30">
                                        <input type="text" placeholder="When Would you like to go ?"/>
                                    </div>
                                    <div className="select-form mb-30">
                                        <div className="select-itms">
                                            <select name="select" id="select1">
                                                <option value="">When</option>
                                                <option value="">Services-1</option>
                                                <option value="">Services-2</option>
                                                <option value="">Services-3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="search-form mb-30">
                                        <a href="#">Search</a>
                                    </div>	
                                </form>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="our-services servic-padding">
            <div className="container">
                <div className="row d-flex justify-contnet-center">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-tour"></span>
                            </div>
                            <div className="services-cap">
                                <h5>8000+ Our Local<br/>Guides</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-pay"></span>
                            </div>
                            <div className="services-cap">
                                <h5>100% Trusted Tour<br/>Agency</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-experience"></span>
                            </div>
                            <div className="services-cap">
                                <h5>28+ Years of Travel<br/>Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-good"></span>
                            </div>
                            <div className="services-cap">
                                <h5>98% Our Travelers<br/>are Happy</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="favourite-place place-padding">
            <div className="container">
             
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>FEATURED TOURS Packages</span>
                            <h2>Favourite Places</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-place mb-30">
                            <div className="place-img">
                                
                                
                                <img src={service1} alt="service"/>
                            </div>
                            <div className="place-cap">
                                <div className="place-cap-top">
                                    <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                                    <h3><a href="#">The Dark Forest Adventure</a></h3>
                                    <p className="dolor">$1870 <span>/ Per Person</span></p>
                                </div>
                                <div className="place-cap-bottom">
                                    <ul>
                                        <li><i className="far fa-clock"></i>3 Days</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-place mb-30">
                            <div className="place-img">
                                <img src={service2} alt=""/>
                            </div>
                            <div className="place-cap">
                                <div className="place-cap-top">
                                    <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                                    <h3><a href="#">The Dark Forest Adventure</a></h3>
                                    <p className="dolor">$1870 <span>/ Per Person</span></p>
                                </div>
                                <div className="place-cap-bottom">
                                    <ul>
                                        <li><i className="far fa-clock"></i>3 Days</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-place mb-30">
                            <div className="place-img">
                                <img src={service3} alt=""/>
                            </div>
                            <div className="place-cap">
                                <div className="place-cap-top">
                                    <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                                    <h3><a href="#">The Dark Forest Adventure</a></h3>
                                    <p className="dolor">$1870 <span>/ Per Person</span></p>
                                </div>
                                <div className="place-cap-bottom">
                                    <ul>
                                        <li><i className="far fa-clock"></i>3 Days</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-place mb-30">
                            <div className="place-img">
                                <img src={service4} alt=""/>
                            </div>
                            <div className="place-cap">
                                <div className="place-cap-top">
                                    <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                                    <h3><a href="#">The Dark Forest Adventure</a></h3>
                                    <p className="dolor">$1870 <span>/ Per Person</span></p>
                                </div>
                                <div className="place-cap-bottom">
                                    <ul>
                                        <li><i className="far fa-clock"></i>3 Days</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-place mb-30">
                            <div className="place-img">
                                <img src={service5} alt=""/>
                            </div>
                            <div className="place-cap">
                                <div className="place-cap-top">
                                    <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                                    <h3><a href="#">The Dark Forest Adventure</a></h3>
                                    <p className="dolor">$1870 <span>/ Per Person</span></p>
                                </div>
                                <div className="place-cap-bottom">
                                    <ul>
                                        <li><i className="far fa-clock"></i>3 Days</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-place mb-30">
                            <div className="place-img">
                                <img src={service6} alt=""/>
                            </div>
                            <div className="place-cap">
                                <div className="place-cap-top">
                                    <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
                                    <h3><a href="#">The Dark Forest Adventure</a></h3>
                                    <p className="dolor">$1870 <span>/ Per Person</span></p>
                                </div>
                                <div className="place-cap-bottom">
                                    <ul>
                                        <li><i className="far fa-clock"></i>3 Days</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="video-area video-bg pt-200 pb-200"  data-background="assets/img/service/video-bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="video-caption text-center">
                            <div className="video-icon">
                                <a className="popup-video" href="https://www.youtube.com/watch?v=1aP-TXUpNoU" tabindex="0"><i className="fas fa-play"></i></a>
                            </div>
                            <p className="pera1">Love where you're going in the perfect time</p>
                            <p className="pera2">Tripo is a World Leading Online</p>
                            <p className="pera3"> Tour Booking Platform</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="support-company-area support-padding fix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="support-location-img mb-50">
                            <img src="assets/img/service/support-img.jpg" alt=""/>
                            <div className="support-img-cap">
                                <span>Since 1992</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="right-caption">
                           
                            <div className="section-tittle section-tittle2">
                                <span>About Our Company</span>
                                <h2>We are Go Trip <br/>Ravels Support Company</h2>
                            </div>
                            <div className="support-caption">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                <div className="select-suport-items">
                                    <label className="single-items">Lorem ipsum dolor sit amet
                                        <input type="checkbox" checked="checked active"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="single-items">Consectetur adipisicing sed do
                                        <input type="checkbox" checked="checked active"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="single-items">Eiusmod tempor incididunt
                                        <input type="checkbox" checked="checked active"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="single-items">Ad minim veniam, quis nostrud.
                                        <input type="checkbox" checked="checked active"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <a href="#" className="btn border-btn">About us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="testimonial-area testimonial-padding" data-background="assets/img/testmonial/testimonial_bg.jpg">
            <div className="container ">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-11 col-lg-11 col-md-9">
                        <div className="h1-testimonial-active">
                       
                            <div className="single-testimonial text-center">
                         
                                <div className="testimonial-caption ">
                                    <div className="testimonial-top-cap">
                                        <img src="assets/img/icon/testimonial.png" alt=""/>
                                        <p>Logisti Group is a representative logistics operator providing full range of ser
                                            of customs clearance and transportation worl.</p>
                                    </div>
                                    
                                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                                        <div className="founder-img">
                                            <img src="assets/img/testmonial/Homepage_testi.png" alt=""/>
                                        </div>
                                        <div className="founder-text">
                                            <span>Jessya Inn</span>
                                            <p>Co Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                            <div className="single-testimonial text-center">
                               
                                <div className="testimonial-caption ">
                                    <div className="testimonial-top-cap">
                                        <img src="assets/img/icon/testimonial.png" alt=""/>
                                        <p>Logisti Group is a representative logistics operator providing full range of ser
                                            of customs clearance and transportation worl.</p>
                                    </div>
                              
                              
                                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                                        <div className="founder-img">
                                            <img src="assets/img/testmonial/Homepage_testi.png" alt=""/>
                                        </div>
                                        <div className="founder-text">
                                            <span>Jessya Inn</span>
                                            <p>Co Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="home-blog-area section-padding2">
            <div className="container">
             
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>Our Recent news</span>
                            <h2>Tourist Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src="assets/img/blog/home-blog1.jpg" alt=""/>
                                </div>
                                <div className="blog-cap">
                                    <p> |   Traveling</p>
                                    <h3><a href="single-blog.html">Tips For Taking A Long-Term Trip With Kids.</a></h3>
                                    <a href="#" className="more-btn">Read more »</a>
                                </div>
                            </div>
                            <div className="blog-date text-center">
                                <span>24</span>
                                <p>Now</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src="assets/img/blog/home-blog2.jpg" alt=""/>
                                </div>
                                <div className="blog-cap">
                                    <p> |   Traveling</p>
                                    <h3><a href="single-blog.html">Tips For Taking A Long-Term Trip With Kids.</a></h3>
                                    <a href="#" className="more-btn">Read more »</a>
                                </div>
                            </div>
                            <div className="blog-date text-center">
                                <span>24</span>
                                <p>Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

    </main>
    <footer>
      
        <div className="footer-area footer-padding footer-bg" data-background="assets/img/service/footer_bg.jpg">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                       <div className="single-footer-caption mb-50">
                         <div className="single-footer-caption mb-30">
                   
                             <div className="footer-logo">
                                 <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
                             </div>
                             <div className="footer-tittle">
                                 <div className="footer-pera">
                                     <p>Lorem iaspsum doldfor sit amvset, consectetur adipisicing cvelit csed do eiusmod tempor incididucvccnt ut labovre.</p>
                                </div>
                             </div>
                         </div>
                       </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#"> Offers & Discounts</a></li>
                                    <li><a href="#"> Get Coupon</a></li>
                                    <li><a href="#">  Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>New Products</h4>
                                <ul>
                                    <li><a href="#">Woman Cloth</a></li>
                                    <li><a href="#">Fashion Accessories</a></li>
                                    <li><a href="#"> Man Accessories</a></li>
                                    <li><a href="#"> Rubber made Toys</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Support</h4>
                                <ul>
                                 <li><a href="#">Frequently Asked Questions</a></li>
                                 <li><a href="#">Terms & Conditions</a></li>
                                 <li><a href="#">Privacy Policy</a></li>
                                 <li><a href="#">Privacy Policy</a></li>
                                 <li><a href="#">Report a Payment Issue</a></li>
                             </ul>
                            </div>
                        </div>
                    </div>
                </div>
             
                <div className="row pt-padding">
                 <div className="col-xl-7 col-lg-7 col-md-7">
                    <div className="footer-copy-right">
                         <p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. 
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  </p>
                    </div>
                 </div>
                  <div className="col-xl-5 col-lg-5 col-md-5">
                     
                        <div className="footer-social f-right">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fas fa-globe"></i></a>
                        </div>
                 </div>
             </div>
            </div>
        </div>
    </footer>


        <script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>
		

		<script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="./assets/js/popper.min.js"></script>
        <script src="./assets/js/bootstrap.min.js"></script>
	    
        <script src="./assets/js/jquery.slicknav.min.js"></script>

	
        <script src="./assets/js/owl.carousel.min.js"></script>
        <script src="./assets/js/slick.min.js"></script>

        <script src="./assets/js/wow.min.js"></script>
		<script src="./assets/js/animated.headline.js"></script>
        <script src="./assets/js/jquery.magnific-popup.js"></script>

	
        <script src="./assets/js/jquery.scrollUp.min.js"></script>
        <script src="./assets/js/jquery.nice-select.min.js"></script>
		<script src="./assets/js/jquery.sticky.js"></script>
        

        <script src="./assets/js/contact.js"></script>
        <script src="./assets/js/jquery.form.js"></script>
        <script src="./assets/js/jquery.validate.min.js"></script>
        <script src="./assets/js/mail-script.js"></script>
        <script src="./assets/js/jquery.ajaxchimp.min.js"></script>
        

        <script src="./assets/js/plugins.js"></script>
        <script src="./assets/js/main.js"></script>
        
    
  
  
  
  </>
  );
}

export default App;
