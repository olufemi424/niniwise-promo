import logo from "../assets/logo/logo-1-landscape.png"
import { useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ButtonCta from "./ButtonCta";

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("nav-open");
  }
  useEffect(() =>{
    if(!navRef.current.classList.contains("nav-open")) return;
    showNavbar()
  }, [location])
  return (
    <header ref={navRef} className="header">
      <a href="/">
        <img src={logo} className="header__logo" alt="Niniwise Logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li className="main-nav-link"><NavLink to="/features">Features</NavLink></li>
          <li className="main-nav-link"><NavLink to="/price-action">Price Action Rules</NavLink></li>
          <li className="main-nav-link"><NavLink to="/blog">Blog</NavLink></li>
          <li className="main-nav-link"><NavLink to="/pricing">Pricing</NavLink></li>
          <li className="main-nav-link"><NavLink to="/login">Login</NavLink></li>
          <li className="main-nav-link"><ButtonCta text={'Try for free'} size={'sm'}></ButtonCta></li>
        </ul>
      </nav>

      <button className="btn-mobile-nav" onClick={showNavbar}>
        <FaBars className="icon-mobile-nav icon-bars" />
        <FaTimes className="icon-mobile-nav icon-times" />
      </button>
    </header>
  );
}

export default Navbar;
