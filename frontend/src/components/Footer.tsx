import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import "./Footer.css";

function Footer() {
    return (
        <div className="md:flex justify-around bg-[var(--surface-purple)] px-10 md:px-5 py-10">
            <div id="section-1" className="flex flex-col gap-3 mb-15 md:mb-0">
                <img src={logo} alt="Tessera Studios Logo" width={300} className="ml-[-15px]" />
                <div className="bg-[var(--secondary)] w-full min-h-[1px]"></div>
                <p className="text-center md:text-start text-sm md:text-base">Building your vision, one piece at a time!</p>
                <p className="text-center md:text-start text-sm md:text-base">© 2025 Tessera Studios. All rights reserved.</p>
            </div>

            <div id="section-2" className="flex flex-col gap-3 mb-10 md:mb-0 text-center md:text-start">
                <p className="text-3xl block md:hidden mb-2">Quick Links</p>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
            </div>

            <div id="section-3" className="flex flex-col gap-2 mb-10 md:mb-0 text-center md:text-start">
                <p className="text-3xl">Connect With Us</p>
                <div className="flex items-center gap-2 ml-8 md:ml-0">
                    <i className="fa-solid fa-envelope text-[var(--secondary)]"></i>
                    <a href="mailto:info@tessera-studios.com">info@tessera-studios.com</a>
                </div>
                <div className="flex items-center gap-2 ml-8 md:ml-0">
                    <i className="fab fa-linkedin text-[var(--secondary)]"></i>
                    <a href="https://www.linkedin.com/company/tesserastudios" target="_blank" rel="noopener noreferrer">Tessera Studios</a>
                </div>

                <div className="flex items-center gap-2 ml-8 md:ml-0">
                     <i className="fa fa-map-marker-alt text-[var(--secondary)]"></i>
                    <p>St.James, Barbados</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;