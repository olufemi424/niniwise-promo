import logo from "../assets/logo/logo-1-landscape.png"
import { NavLink } from "react-router-dom";
import ButtonCta from "./ButtonCta";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__aside">
            <a href="/">
              <img src={logo} className="header__logo" alt="Niniwise Logo" />
            </a>
          </div>
          <div className="header__content">
            <nav className="header__nav">
              <ul>
                <li>
                  <NavLink to="/features">Features</NavLink>
                </li>
                <li>
                  <NavLink to="/price-action">Price Action Rules</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/pricing">Pricing</NavLink>
                </li>
              </ul>
            </nav>
            <nav className="header__nav-access">
              <ul>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <ButtonCta size={'sm'}></ButtonCta>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
