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
              <SubDropdownItem title="Lumbini" />
              <SubDropdownItem title="Everest Base Camp" />
              <SubDropdownItem title="Annapurna Circuit" />
            </DropdownItem>
            <DropdownItem title="Bhutan" />
            <DropdownItem title="Tibet" />
            <DropdownItem title="India" />
          </NavItem>
          {/* Add other navbar items */}
          <NavItem title="Day Tour">
            <DropdownItem title="Rafting" />
            <DropdownItem title="Helicopter tour" />
            <DropdownItem title="Annapurna Base Camp" />
            <DropdownItem title="Helicopter Tour" />
          </NavItem>
          <NavItem title="Luxury Travel">
            <DropdownItem title="Rafting" />
            <DropdownItem title="Helicopter tour" />
            <DropdownItem title="Annapurna base camp" />
            <DropdownItem title="Helicopter Tour" />
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
          <NavItem title="Blog">
            <Link className="nav-link px-4 text-dark" to="/blog">Blog</Link>
          </NavItem>
          <NavItem title="Company">
            <DropdownItem title="About us" />
            <DropdownItem title="Pay now" />
            <DropdownItem title="Our team" />
            <DropdownItem title="Reviews" />
            <DropdownItem title="Documents" />
            <DropdownItem title="Why us?" />
            <DropdownItem title="Partner With Us" />
          </NavItem>
          <NavItem title="Contact">
            <Link className="nav-link px-4 text-dark" to="/Contact-us">Contact</Link>
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}

const NavItem = ({ title, children }) => (
  <li className="nav-item dropdown">
    <span className="nav-link dropdown-toggle px-4 text-dark" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {title}
    </span>
    <div className="dropdown-menu" aria-labelledby={`${title}Dropdown`}>
      {children}
    </div>
  </li>
);

const DropdownItem = ({ title, children }) => (
  <React.Fragment>
    <span className="dropdown-item d-flex justify-content-between align-items-center" href="#">
      {title} <i className="fas fa-chevron-right"></i>
    </span>
    {children && <div className="dropdown-divider"></div>}
    {children}
  </React.Fragment>
);

const SubDropdownItem = ({ title }) => (
  <span className="dropdown-item d-flex justify-content-between align-items-center" href="#">
    {title}
  </span>
);

export default Navbar;
