import { useEffect, useState } from 'react';
import './Booking.css';

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_URL = 'https://calendly.com/tessera-studios-info/consultation?&hide_gdpr_banner=1&primary_color=933eff';

export default function Booking() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) {
            const t = setTimeout(() => setLoading(false), 700);
            return () => clearTimeout(t);
        }

        const script = document.createElement('script');
        script.src = CALENDLY_SCRIPT_SRC;
        script.async = true;
        script.type = 'text/javascript';
        script.onload = () => setLoading(false);
        script.onerror = () => {
            setLoading(false);
            setError(true);
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div id="booking" className="booking-shell flex flex-col justify-center items-center min-h-screen px-6 py-25 sm:px-6 sm:py-10 md:text-center md:px-12 md:py-25 lg:px-20">
            <div className="booking-header w-full max-w-4xl text-left md:text-center mb-5 md:mb-6">
                <h1 className="text-3xl md:text-4xl font-semibold mb-2">Book a Consultation</h1>
                <p className="text-gray-200">Schedule a professional consultation with our team. Choose a time that works best for you.</p>
            </div>

            {loading && !error && (
                <div className="spinner" aria-hidden="true" />
            )}

            {error && (
                <div className="error flex flex-col items-center gap-4">
                    <p>Unable to load the booking widget.</p>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="open-link">
                        Open Calendly in a new tab
                    </a>
                </div>
            )}

            <div
                className="calendly-inline-widget w-full rounded-lg overflow-hidden shadow-lg calendly-wrapper"
                data-url={CALENDLY_URL}
                style={{ width: '100%', height: 'clamp(620px, 78vh, 900px)' }}
                role="region"
                aria-label="Booking calendar"
            />

            <div className="mt-6">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta-btn">
                    Open booking in new tab
                </a>
            </div>
        </div>
    );
}