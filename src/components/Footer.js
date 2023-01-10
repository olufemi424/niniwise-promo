import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo-yellow.png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__aside">
                    <h3>Niniwise</h3>
                </div>
                <div className="footer__content">
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

                    <div className="footer__legal">
                        &copy; 2017 by trillo. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
  }

  export default Footer;
