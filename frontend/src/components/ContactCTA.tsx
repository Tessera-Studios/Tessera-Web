import "./ContactCTA.css"

function ContactCTA() {
    return (
            <div id="contact-cta" className="flex flex-col justify-center items-center min-h-[100vh]">
                <h2 className="text-5xl mb-4">Ready to Build Something Meaningful?</h2>
                <p className="text-center py-4 max-w-[44vw]">Whether you need a modular MVP or a fully scalable platform, we’re here to help you bring your vision to life—one tessera at a time.</p>
                  <button id="contact-button" className="mt-6">Get Started</button>
            </div>
    );
}

export default ContactCTA;