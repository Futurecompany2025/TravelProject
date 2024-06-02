import React from 'react';
import logo from '../assets/img/logo/logo.png';
import { Link } from 'react-router-dom';
import './navbar.css';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
        <ul className="navbar-nav ml-auto">
          <NavItem title="Destinations">
            <DropdownItem title="Nepal">
                <DropdownItem title="Trekking in Nepal" />
                <DropdownItem title="Tour in Nepal" />
                <DropdownItem title="Luxury Tours in Nepal" />
                <DropdownItem title="Peak Climbing in Nepal" />
                <DropdownItem title="Expeditions in Nepal" />
            </DropdownItem>
            <DropdownItem title="Bhutan">
                <DropdownItem title="Bhutan Tour" />
            </DropdownItem>
            <DropdownItem title="Tibet">
                <DropdownItem title="Tibet Tour" />
            </DropdownItem>
            <DropdownItem title="India">
                <DropdownItem title="India Tour" />
            </DropdownItem>
          </NavItem>
          <NavItem title="Day Tour">
            <DropdownItem title="Rafting" />
            <DropdownItem title="Helicopter Tour" />
            <DropdownItem title="Annapurna Base Camp" />
          </NavItem>
          <NavItem title="Luxury Travel">
            <DropdownItem title="Rafting" />
            <DropdownItem title="Helicopter Tour" />
            <DropdownItem title="Annapurna Base Camp" />
          </NavItem>
          <NavItem title="Travel Style">
            <DropdownItem title="Family Trip" />
            <DropdownItem title="Corporate Travel" />
            <DropdownItem title="Solo Travel" />
            <DropdownItem title="Group Travel" />
          </NavItem>
          <NavItem title="Travel Guide">
            <DropdownItem title="Nepal Travel Guide" />
            <DropdownItem title="India Travel Guide" />
            <DropdownItem title="Bhutan Travel Guide" />
            <DropdownItem title="Tibet Travel Guide" />
          </NavItem>
          <li className="nav-item">
            <Link className="nav-link px-4 text-dark" to="/blog">Blog</Link>
          </li>
          <NavItem title="Company">
            <Link className="dropdown-item" to="/about-us">About us</Link>
            <Link className="dropdown-item" to="/pay-now">Pay now</Link>
            <Link className="dropdown-item" to="/our-team">Our team</Link>
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

const DropdownItem = ({ title, children }) => (
  <div className="dropdown">
    <span className="dropdown-item d-flex justify-content-between align-items-center">
      {title} {children && <i className="fas fa-chevron-right"></i>}
    </span>
    {children && <div className="dropdown-menu sub-dropdown">{children}</div>}
  </div>
);
export default Navbar;
