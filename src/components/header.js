// import React, { useState } from 'react';
// import logo from '../assets/img/logo/logo.png';
// const Header = () => {
//     // State to keep track of the hovered destination
//     const [hoveredDestination, setHoveredDestination] = useState(null);
//     // Function to handle hovering over a destination
//     const handleDestinationHover = (destination) => {
//         setHoveredDestination(destination);
//     };
//     return (
//         <header>
//             <div className="header-area">
//                 <div className="main-header">
//                     <div className="header-top top-bg d-none d-lg-block">
//                         <div className="container">
//                             <div className="row justify-content-between align-items-center">
//                                 <div className="col-lg-8">
//                                     <div className="header-info-left">
//                                         <ul className="list-unstyled">                          
//                                             <li>J1Trekking@gmail.com</li>
//                                             <li>123456</li>
//                                             <li>Thamel Kathmandu</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4">
//                                     <div className="header-info-right f-right">
//                                         <ul className="header-social list-inline">    
//                                             <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
//                                             <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
//                                             <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
//                                             <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="header-bottom  header-sticky">
//                         <div className="container">
//                             <div className="row align-items-center">
//                                 <div className="col-xl-2 col-lg-2 col-md-1">
//                                     <div className="logo">
//                                         <a href="index.html"><img src={logo} alt="Logo" className="img-fluid" /></a>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-10 col-lg-10 col-md-10">
//                                     <nav className="main-menu f-right d-none d-lg-block">               
//                                         <ul className="list-unstyled" id="navigation">
//                                             <li className="menu-item-has-children">
//                                                 <a href="#">Destinations</a>
//                                                 <ul className="submenu list-unstyled">
//                                                     <li className="menu-item-has-children" onMouseEnter={() => handleDestinationHover('Nepal')}>
//                                                         <a href="#">Nepal</a>
//                                                         {hoveredDestination === 'Nepal' && (
//                                                             <ul className="submenu list-unstyled">
//                                                                 <li><a href="#">Trekking in Nepal</a></li>
//                                                                 <li><a href="#">Tours in Nepal</a></li>
//                                                                 <li><a href="#">Luxury Tours in Nepal</a></li>
//                                                                 <li><a href="#">Peak Climbing in Nepal</a></li>
//                                                                 <li><a href="#">Expeditions in Nepal</a></li>
//                                                             </ul>
//                                                         )}
//                                                     </li>
//                                                     <li><a href="#">India</a></li>
//                                                     <li><a href="#">Bhutan</a></li>
//                                                     <li><a href="#">Tibet</a></li>
//                                                 </ul>
//                                             </li>
//                                             <li><a href="about.html">Day Tours</a></li>
//                                             <li><a href="packages.html">Luxury Travel</a></li>
//                                             <li><a href="blog.html">Travel Style</a></li>
//                                             <li><a href="blog.html">Travel Guide</a></li>
//                                             <li><a href="blog.html">Blogs</a></li>
//                                             <li><a href="blog.html">Company</a></li>
//                                             <li><a href="contact.html">Contact Us</a></li>
//                                         </ul>
//                                     </nav>
//                                 </div>
//                                 <div className="col-12">
//                                     <div className="mobile_menu d-block d-lg-none"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };
// export default Header;
