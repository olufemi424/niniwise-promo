import { NavLink } from "react-router-dom";
import logo from "../assets/NiniwiseLogo.jpeg"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__aside">
                    <a href="/">
                        <img
                            className="footer__img"
                            src={ logo }
                            alt="Niniwise journal"
                        />
                    </a>
                </div>
                <div className="footer__content">
                    <ul>
                        <li>
                            <NavLink to="/features">Features</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pricing">Pricing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/price-action">Price Action Rules</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
  }

  export default Footer;
