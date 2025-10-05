import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

function Footer() {
    return (
        <div className="md:flex justify-around bg-[var(--surface-purple)] px-10 md:px-5 py-10">
            <div id="section-1" className="flex flex-col gap-3 mb-15 md:mb-0">
                <img src={logo} width={300} className="ml-[-15px]" />
                <div className="bg-[var(--secondary)] w-full min-h-[1px]"></div>
                <p className="text-center md:text-start text-sm md:text-base">Building your vision, one piece at a time!</p>
                <p className="text-center md:text-start text-sm md:text-base">© 2025 Tessera Studios. All rights reserved.</p>
            </div>

            <div id="section-2" className="flex flex-col gap-3 mb-10 md:mb-0 text-center md:text-start">
                <p className="text-3xl block md:hidden mb-2">Quick Links</p>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

            <div id="section-3" className="flex flex-col gap-4 mb-10 md:mb-0 text-center md:text-start">
                <p className="text-3xl">Connect With Us</p>
                <div className="flex items-center gap-2 ml-8 md:ml-0">
                    <i className="fa-solid fa-envelope text-[var(--secondary)]"></i>
                    <p>info@tessera-studios.com</p>
                </div>
                <div className="flex items-center gap-2 ml-8 md:ml-0">
                    <i className="fab fa-linkedin text-[var(--secondary)]"></i>
                    <p>Tessera Studios</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;