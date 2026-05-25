import "./ContactCTA.css"
import { CALENDLY_URL } from "../lib/utils";

function ContactCTA() {
    return (
        <div id="contact-cta" className="flex flex-col justify-center items-center min-h-[100vh] p-8 md:p-20">
            <h2 className="text-3xl lg:text-5xl text-center lg:text-start mb-4">Ready to Build Something Meaningful?</h2>
            <p className="text-center text-lg py-2 md:py-4 lg:max-w-[44vw]">Whether you need a one page website or a fully scalable platform, we’re here to help you bring your vision to life — one tessera at a time.</p>
            <a
                id="contact-button"
                className="mt-6 mb-20 md:mb-0 inline-block text-white no-underline"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                Get Started
            </a>
        </div>
    );
}

export default ContactCTA;