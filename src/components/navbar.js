import React, { useState } from 'react';
import logo from '../assets/img/logo/logo.png';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
        <ul className="navbar-nav ml-auto">
          <NavItem title="Destinations">
            <DropdownItem title="Nepal" to="/nepal">
              <DropdownItem title="Trekking in Nepal" to="/nepal/trekking" />
              <DropdownItem title="Tour in Nepal" to="/nepal/tour" />
                <DropdownItem title="Luxury Tours in Nepal" to="/nepal/luxury-tours" />
                <DropdownItem title="Peak Climbing in Nepal" to="/nepal/peak-climbing" />
                <DropdownItem title="Expeditions in Nepal" to="/nepal/expeditions" />
            </DropdownItem>
            <DropdownItem title="Bhutan" to="/bhutan">
                <DropdownItem title="Bhutan Tour" to="/bhutan/tour" />
            </DropdownItem>
            <DropdownItem title="Tibet" to="/tibet">
                <DropdownItem title="Tibet Tour" to="/tibet/tour" />
            </DropdownItem>
            <DropdownItem title="India" to="/india">
                <DropdownItem title="India Tour" to="/india/tour" />
            </DropdownItem>
          </NavItem>
          <NavItem title="Day Tour">
          <DropdownItem title="Helicopter Tour to Everest Base Camp Day Tour" to="/helicopter-everest-base" />
          <DropdownItem title="White Water Day Rafting" to="/white-water-day-rafting" />
  <DropdownItem title="Muktinath Helicopter Tour" to="/muktinath-helicopter-tour" />
  <DropdownItem title="Annapurna Base Camp Helicopter Tour" to="/annapurna-base-camp" />
  <DropdownItem title="Langtang Helicopter Tour" to="/dlangtang-helicopter-tour" />
  <DropdownItem title="Kakani Day Hike" to="/kakani-day-hike" />
  <DropdownItem title="Kathmandu and Patan Day Tour" to="/kathmandu-patan-day-tour" />
  <DropdownItem title="Shivapuri Day Hike" to="/shivapuri-day-hike" />
  <DropdownItem title="5 UNESCO World Heritage sites of Kathmandu Day Tour" to="/5-unesco-world-heritage-sites" />
  <DropdownItem title="Kathmandu and Kirtipur Day Tour" to="/kathmandu-kirtipur-day-tour" />
  <DropdownItem title="Tare Bhir Day Hike" to="/tare-bhir-day-hike" />
          </NavItem>
          <NavItem title="Luxury Travel">
            <DropdownItem title="Ultra - Luxury Trek to Everest Base Camp" to="/rafting" />
            <DropdownItem title="Helicopter Tour to Everest Base Camp Day Tour" to="/helicopter" />
            <DropdownItem title="Heli Trek to Everest Base Camp" to="/annapurna-base-camp" />
            <DropdownItem title="Muktinath Helicopter Tour" to="/muktinath-helicopter-tour" />
            <DropdownItem title="Luxury Trek to Annapurna" to="/annapurna-base-camp" />
            <DropdownItem title="Exquisite Nepal Luxury Tour" to="/annapurna-base-camp" />
            <DropdownItem title="Annapurna Base Camp Helicopter Tour" to="/annapurna-base-camp" />
            <DropdownItem title="Langtang Helicopter Tour" to="/annapurna-base-camp" />
          </NavItem>
          <NavItem title="Travel Style">
            <DropdownItem title="Family Trip" to="/travel-style/family-trip" />
            <DropdownItem title="Corporate Travel" to="/travel-style/corporate-travel" />
            <DropdownItem title="Solo Travel" to="/travel-style/solo-travel" />
            <DropdownItem title="Group Travel" to="/travel-style/group-travel" />
            <DropdownItem title="Relegious" to="/travel-style/group-travel" />
          </NavItem>
          <NavItem title="Travel Guide">
            <DropdownItem title="Nepal Travel Guide" to="/travel-guide/nepal" />
            <DropdownItem title="India Travel Guide" to="/travel-guide/india" />
            <DropdownItem title="Bhutan Travel Guide" to="/travel-guide/bhutan" />
            <DropdownItem title="Tibet Travel Guide" to="/travel-guide/tibet" />
          </NavItem>
          <li className="nav-item">
            <Link className="nav-link px-4 text-dark" to="/blog">Blog</Link>
          </li>
          <NavItem title="Company">
            <Link className="dropdown-item" to="/about-us">About us</Link>
            <Link className="dropdown-item" to="/pay-now">Pay now</Link>
            <Link className="dropdown-item" to="/ourteam">Our team</Link>
            <Link className="dropdown-item" to="/reviews">Reviews</Link>
            <Link className="dropdown-item" to="/documents">Documents</Link>
            <Link className="dropdown-item" to="/why-us">Why us?</Link>
            <Link className="dropdown-item" to="/partner-with-us">Partner With Us</Link>
          </NavItem>
          <li className="nav-item">
            <Link className="nav-link px-4 text-dark" to="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const NavItem = ({ title, children }) => (
  <li className="nav-item dropdown">
    <span className="nav-link dropdown-toggle px-4 text-dark" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {title}
    </span>
    <div className="dropdown-menu" aria-labelledby={`${title}Dropdown`}>
      {children}
    </div>
  </li>
);

const DropdownItem = ({ title, to, children }) => (
  <div className="dropdown">
    <Link to={to} className="dropdown-item d-flex justify-content-between align-items-center">
      {title} {children && <i className="fas fa-chevron-right"></i>}
    </Link>
    {children && <div className="dropdown-menu sub-dropdown">{children}</div>}
  </div>
);
export default Navbar;
