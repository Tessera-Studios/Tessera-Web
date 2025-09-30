import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

function Footer() {
    return (
        <div className="flex justify-around bg-[var(--surface-purple)] px-5 py-10">
            <div id="section-1" className="flex flex-col gap-3">
                <img src={logo} width={300} className="ml-[-15px]" />
                <div className="bg-[var(--secondary)] w-full min-h-[1px]"></div>
                <p>Building your vision, one piece at a time!</p>
                <p>© 2025 Tessera Studios. All rights reserved.</p>
            </div>

            <div id="section-2" className="flex flex-col gap-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

            <div id="section-3" className="flex flex-col gap-4">
                <p className="text-3xl">Connect With Us</p>
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-envelope text-[var(--secondary)]"></i>
                    <p>info@tessera-studios.com</p>
                </div>
                <div className="flex items-center gap-2">
                    <i className="fab fa-linkedin text-[var(--secondary)]"></i>
                    <p>Tessera Studios</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;