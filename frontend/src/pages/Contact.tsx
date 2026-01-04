import "./Contact.css";
import Silk from "../components/Silk";
import emblem from "../assets/tessera-emblem-light-purple-transparent.png";
import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Contact() {
    useEffect(() => {
        document.title = 'Tessera Studios | Contact';
    }, []);

    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement>(null);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;

        if (!form) return;

        const formData = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
        })
            .then(() => navigate("/contact-success"))
            .catch((error) => alert(error));
    };

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
                    <form
                        id="contact-form-form"
                        name="contact"
                        className="flex flex-col justify-start items-start gap-5 w-full"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={submitHandler}
                        ref={formRef}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                            <label>Don’t fill this out: <input name="bot-field" /></label>
                        </p>

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
