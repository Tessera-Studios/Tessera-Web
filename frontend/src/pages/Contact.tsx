import "./Contact.css";
import Silk from "../components/Silk";
import emblem from "../assets/tessera-emblem-light-purple-transparent.png";

function Contact() {
    return (
        <>
            <div id="contact-landing" className="relative min-h-[100vh] p-8 py-30 md:py-40 flex flex-col justify-center items-center text-center">
                <div className="absolute inset-0 -z-10">
                    <Silk
                        speed={8}
                        scale={1.2}
                        color="#1a123eff"
                        noiseIntensity={0.6}
                        rotation={85}
                    />
                </div>

                <div id="contact-form" className="flex flex-col justify-center items-center p-10 md:px-30 md:py-20">
                    <img id="contact-emblem" src={emblem} alt="Tessera Studios Emblem" className="w-20 h-20 mb-2 spinner hover:cursor-pointer"
                        onClick={() => {
                            document.getElementById("contact-emblem")?.classList.toggle("easter-egg-spinner");
                            setTimeout(() => { document.getElementById("contact-emblem")?.classList.toggle("easter-egg-spinner"); }, 4000);
                        }} />
                    <h1 className="text-2xl md:text-4xl font-semibold mb-8 text-center">Let's Get in Touch</h1>
                    <form name='contact' className="flex flex-col justify-start items-start gap-5 w-full" method='post' data-netlify="true" netlify-honeypot="bot-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required className="contact-input" />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required className="contact-input" />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} required className="contact-input"></textarea>


                        <div className="flex justify-center items-center w-full">
                            <button type="submit" id="contact-submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
