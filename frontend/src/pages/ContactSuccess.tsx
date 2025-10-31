import "./ContactSuccess.css";
import Silk from "../components/Silk";
import emblem from "../assets/tessera-emblem-light-purple-transparent.png";
import { Link } from "react-router-dom";

function ContactSuccess() {
    return (
        <div id="contact-landing" className="relative min-h-[100vh] p-8 py-30 md:py-40 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 -z-10">
                <Silk
                    speed={6}
                    scale={1.1}
                    color="#1a123eff"
                    noiseIntensity={0.5}
                    rotation={85}
                />
            </div>

            <div id="success-message" className="flex flex-col justify-center items-center p-10 md:px-30 md:py-20">
                <img id="contact-emblem" src={emblem} alt="Tessera Studios Emblem" className="w-20 h-20 mb-2 spinner" />
                <h1 className="text-2xl md:text-4xl font-semibold mb-4">Success!</h1>
                <p className="mb-6 max-w-xl px-10 md:px-0">We received your message and will respond to you shortly. Please keep an eye on your inbox.</p>

                <div className="flex gap-4">
                    <Link to="/contact" id="return-home-btn">Return Home</Link>
                </div>
            </div>
        </div>
    );
}

export default ContactSuccess;
