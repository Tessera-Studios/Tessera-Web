import logo from "../assets/logo.png"

function Navbar() {
    return (
        <>
            <div id="nav-bar" className="flex justify-between p-5 px-8 absolute w-full left-0 z-50">
                <div id="branding">
                    <img id="logo" src={logo} width={200}></img>
                    
                </div>

                <div id="links" className="flex md:gap-8 md:px-5 ">
                    <a href="/" className="px-2">Home</a>
                    <a href="/about" className="px-2">About</a>
                    <a href="/services" className="px-2">Services</a>
                    <a href="/contact" className="px-2">Contact</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;