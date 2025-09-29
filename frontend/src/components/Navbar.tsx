import "./Navbar.css"
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div id="nav-bar" className="flex justify-between p-5 px-8 absolute w-full left-0 z-50">
                <div id="branding">
                    <img id="logo" src={logo} width={200}></img>

                </div>

                <div id="links" className="flex md:gap-12 md:px-5 mr-2">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : '' + 'nav-link'}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : '' + 'nav-link'}>
                        About
                    </NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : '' + 'nav-link'}>
                        Services
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : '' + 'nav-link'}>
                        Contact
                    </NavLink>
                    {/* <a href="/" className="px-2">Home</a>
                    <a href="/about" className="px-2">About</a>
                    <a href="/services" className="px-2">Services</a>
                    <a href="/contact" className="px-2">Contact</a> */}
                </div>
            </div>
        </>
    );
}

export default Navbar;