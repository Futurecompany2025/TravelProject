 import './navbar.css';
 import logo from '../assets/img/logo/logo.png'; 
 import { Link } from 'react-router-dom';
 function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <div className="logo" style={{ maxWidth: '150px' }}>
          <a href="index.html"><img src={logo} alt="" style={{ maxWidth: '100%', height: 'auto' }} /></a> {/* Adjust the size of the logo */}
                                </div>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle px-4 text-dark " href="#" id="homeDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Destinations
              </a>
              <div class="dropdown-menu " aria-labelledby="homeDropdown">
                <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Nepal  <i class="fas fa-chevron-right"></i></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Bhutan  <i class="fas fa-chevron-right"></i></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Tibet  <i class="fas fa-chevron-right"></i></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item d-flex justify-content-between align-items-center" href="#"> India <i class="fas fa-chevron-right"></i></a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle px-4 text-dark" href="#" id="aboutDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Day Tour
              </a>
              <div class="dropdown-menu" aria-labelledby="aboutDropdown">
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Rafting</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Helicopter tour </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Annapurna Base Camp </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Helicopter Tour</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle px-4 text-dark" href="#" id="servicesDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Luxury Travel
              </a>
              <div class="dropdown-menu" aria-labelledby="servicesDropdown">
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Rafting</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Helicopter tour </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Annapurna base camp </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Helicopter Tour</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle px-4 text-dark" href="#" id="contactDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Travel Style
              </a>
              <div class="dropdown-menu" aria-labelledby="contactDropdown">
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Family Trip</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Corporate Travel</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Solo Travel</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Group Travel</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle px-4 text-dark" href="#" id="contactDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Travel Guide
              </a>
              <div class="dropdown-menu" aria-labelledby="contactDropdown">
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Nepal Travel Guide</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">India Travel Guide </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Bhutan Travel Guide </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Tibet Travel  Guide</a>
              </div>
            </li>
            <li className="nav-item">
                        <Link className="nav-link px-4 text-dark" to="/blog">Blog</Link>
                    </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle px-4 text-dark" href="#" id="contactDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Company
              </a>
              <div class="dropdown-menu" aria-labelledby="contactDropdown">
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="/about-us">About us</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Pay now</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="/OurTeam">Our team </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Reviews</a>

              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Documents</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Why us? </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Partner With Us </a>
              </div>
            </li>
            <li class="nav-item dropdown">
            <a className="nav-link px-4 text-dark" href="/Contact-us" id="contactDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )  
  }
  export default Navbar;