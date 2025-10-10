import { Link } from "react-router-dom";
import "./ContactCTA.css"

function ContactCTA() {
    return (
        <div id="contact-cta" className="flex flex-col justify-center items-center min-h-[100vh] p-10 md:p-20">
            <h2 className="text-xl md:text-4xl lg:text-5xl text-center lg:text-start mb-4">Ready to Build Something Meaningful?</h2>
            <p className="text-center py-2 md:py-4 lg:max-w-[44vw]">Whether you need a modular MVP or a fully scalable platform, we’re here to help you bring your vision to life—one tessera at a time.</p>
            <button id="contact-button" className="mt-6"><Link to="/contact">Get Started</Link></button>
        </div>
    );
}

export default ContactCTA;