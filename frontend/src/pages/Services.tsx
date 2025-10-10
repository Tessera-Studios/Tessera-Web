import "./Services.css";
import softwareDevImage from "../assets/software-development.png";
import uiuxImage from "../assets/uiux.png";
import brandingImage from "../assets/brand-identity.png";
import ContactCTA from "../components/ContactCTA";

function Services() {
    return (
        <>
            <div id="services-landing" className="flex flex-col justify-center items-center md:text-center min-h-[100vh] p-10 md:p-20">
                <p className="text-4xl md:text-5xl text-center font-semibold mb-4">Our Services</p>
                <p className="text-lg md:max-w-1/2 mb-5">Our services turn complex ideas into intuitive, modular solutions—creating digital experiences that drive engagement, growth, and long-term value.</p>
                <button id="services-learn-more-button" onClick={() => {
                    const section = document.getElementById("services-software-development");
                    section?.scrollIntoView({ behavior: "smooth" });
                }}>Learn More</button>
            </div>

            <div id="services-software-development" className="flex flex-col lg:flex-row justify-center items-center md:min-h-[50vh] p-15 md:p-30 lg:px-40">
                <div className="image-container lg:ml-10">
                    <img className="services-image" src={softwareDevImage} width={300} />
                    <div className="inner-shadow"></div>
                </div>
                <div className="lg:ml-12 mt-10 lg:mt-0 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Software Development</p>
                    <p className="text-lg mb-5 mt-2 lg:text-2xl md:leading-10 font-medium">We build scalable and maintainable software solutions tailored to your business needs.</p>
                </div>
            </div>

            <div id="services-uiux" className="flex flex-col lg:flex-row justify-center items-center md:min-h-[50vh] p-15 md:p-20 lg:px-40 bg-[var(--dark-purple)] text-white">
                <div className="lg:ml-12 mt-10 lg:mt-0 text-center lg:text-left flex flex-col justify-center items-center lg:items-start lg:order-1 order-2">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">UI/UX Design</p>
                    <p className="text-lg mb-5 mt-2 lg:text-lg md:leading-10 lg:max-w-[700px] font-medium">Our design process starts with empathy. We create intuitive, elegant interfaces that not only look great—but work beautifully for real users.</p>
                </div>
                <div className="image-container lg:ml-10 lg:order-2 order-1">
                    <img className="services-image" src={uiuxImage} width={300} />
                    <div className="inner-shadow"></div>
                </div>
            </div>

            <div id="services-branding" className="flex flex-col lg:flex-row justify-center items-center md:min-h-[50vh] p-15 md:p-20 lg:px-40 bg-white text-[var(--background)]">
                <div className="image-container lg:ml-10">
                    <img className="services-image" src={brandingImage} width={300} />
                    <div className="inner-shadow"></div>
                </div>
                <div className="lg:ml-12 mt-10 lg:mt-0 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Branding & Visual Identity</p>
                    <p className="text-lg mb-5 mt-2 lg:text-lg md:leading-10 lg:max-w-[700px] font-medium">We help brands take shape visually and strategically—ensuring consistency across digital platforms while amplifying your unique voice.</p>
                </div>
            </div>

            <ContactCTA />
        </>
    );
}

export default Services;