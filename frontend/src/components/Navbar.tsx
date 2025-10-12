import "./Navbar.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                id="nav-bar"
                className="flex justify-between p-5 px-8 absolute w-full left-0 z-50"
            >
                <div id="branding">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isActive ? "active " : ""}nav-link`
                        }
                    >
                        <img id="logo" src={logo} width={200} alt="Tessera Studios Logo" />
                    </NavLink>
                </div>

                <div
                    id="links"
                    className="md:gap-12 md:px-5 mr-2 hidden lg:flex"
                >
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isActive ? "active " : ""}nav-link`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${isActive ? "active " : ""}nav-link`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `${isActive ? "active " : ""}nav-link`
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${isActive ? "active " : ""}nav-link`
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div id="menu-bar" className="block lg:hidden">
                    <button
                        className="menu-button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <i
                            className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}
                            aria-hidden="true"
                        ></i>
                    </button>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* Sliding Sidebar */}
            <div
                className={`lg:hidden fixed top-0 left-0 w-[65vw] h-[100vh] bg-[linear-gradient(180deg,var(--background),var(--dark-purple))] text-white flex flex-col items-center py-6 pt-30 gap-5 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `${isActive ? "active " : ""}nav-link`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `${isActive ? "active " : ""}nav-link`
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `${isActive ? "active " : ""}nav-link`
                    }
                >
                    Services
                </NavLink>
                <NavLink
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `${isActive ? "active " : ""}nav-link`
                    }
                >
                    Contact
                </NavLink>
            </div>
        </>
    );
}

export default Navbar;
