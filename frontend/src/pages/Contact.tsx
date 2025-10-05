import "./Contact.css";
import Silk from "../components/Silk";

function Contact() {
    return (
        <>
            <div id="contact-landing" className="relative min-h-[100vh] p-20 md:py-40 flex flex-col justify-center items-center text-center">
                  <div className="absolute inset-0 -z-10">
                    <Silk
                        speed={8}
                        scale={1.2}
                        color="#191239ff"
                        noiseIntensity={0.6}
                        rotation={85}
                    />
                </div>

                <div id="contact-form" className="flex flex-col justify-center items-center p-10 md:px-30 md:py-20">
                    <h1 className="text-4xl md:text-4xl font-semibold mb-5 text-center">Let's Get in Touch</h1>
                    <form className="flex flex-col justify-start items-start gap-5 w-full ">
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