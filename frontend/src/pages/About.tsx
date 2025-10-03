import emblem from '../../public/tessera-emblem.png';
import landingImage from "../assets/about-landing.png"
import ourApproachImage from "../assets/our-approach.png";
import missionVisionBg from "../assets/vision-mision.mp4"
import ContactCTA from '../components/ContactCTA';
import "./About.css";

function About() {
    return (
        <div className="overflow-x-hidden">
            <div id="about-landing" className="flex flex-col md:flex-row justify-center items-center min-h-[100vh] px-12 md:p-20" style={{ backgroundImage: `url(${landingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='md:mr-10 px-22 md:p-0'> <img src={emblem} alt="Tessera Emblem" width={300} /></div>
                <div className="mt-5 md:mt-0 md:w-[35vw] pb-20 md:pb-0">
                    <h2 className='text-2xl md:text-4xl mb-3 font-semibold'>Every Digital Experience Is A Mosaic</h2>
                    <p className='md:leading-8'>At Tessera Studios, we believe digital products should feel like art—thoughtfully composed, built with care, and deeply connected to the people who use them.
                        <br /><br />Our name comes from tesserae, the small, individual pieces of a mosaic—each one essential to the bigger picture.</p>
                </div>
            </div>

            <div id="about-who-we-are" className="flex flex-col md:flex-row justify-center items-center min-h-[100vh] md:min-h-[75vh] px-12 md:p-20 text-white">
                <div className="lg:w-[36vw] md:p-2 py-10">
                    <h2 className='text-4xl mb-5 font-semibold'>Who We Are</h2>
                    <p className='md:leading-8 text-sm'>We’re a creative team driven by a shared passion for building meaningful digital experiences.
                        <br /><br /> At Tessera Studios, users come first—every product we design and build is rooted in real human needs and thoughtful problem-solving.
                        <br /><br /> We’re committed to crafting immersive, flexible solutions that reflect your vision and deliver real impact.
                    </p>
                </div>
                <div className="image-container md:ml-10">
                    <img className="our-approach-image" src={ourApproachImage} width={350} />
                    <div className="inner-shadow"></div>
                </div>

            </div>

            <div id="about-vision-mission" className="relative flex justify-center items-center min-h-[100vh] p-5 md:p-20">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={missionVisionBg} type="video/mp4" />
                </video>

                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className="vision-mission-tile p-10 md:p-20 rounded-lg text-white max-w-4xl z-10 bg-[linear-gradient(to_left,var(--dark-purple),var(--accent))] md:mr-10 text-center min-w-[30vw]">
                    <h2 className='text-4xl mb-5 font-semibold'>Our Vision</h2>
                    <p className='text-start'>To be the leading creator of modular, user-centered digital experiences that blend design, technology, and storytelling—empowering businesses and enriching lives, globally.</p>
                </div>
                <div className="vision-mission-tile p-10 md:p-20 rounded-lg text-white max-w-4xl z-10 bg-[linear-gradient(to_right,var(--dark-purple),var(--accent))] md:ml-10 text-center min-w-[30vw]">
                    <h2 className='text-4xl mb-5 font-semibold'>Our Mission</h2>
                    <p className='text-start'>To craft innovative, scalable digital solutions that are as thoughtful as they are powerful—connecting clients with their users through precision, creativity, and care.</p>
                </div>
                </div>
            </div>

            <div id="about-what-sets-us-apart" className="flex flex-col justify-center items-center min-h-[60vh] p-10 pt-20 mt-20">
                <h2 className="text-3xl md:text-4xl font-semibold mb-10">What Sets Us Apart</h2>

                <div id="sets-us-apart-tiles">
                    <div className="flex flex-col md:flex-row w-full gap-5">
                        <div className="sets-us-apart-tile">
                            <h3 className="text-xl font-semibold mb-2">Modularity</h3>
                            <p className="leading-7">Every project is built to scale: flexible, adaptable, and future-ready.</p>
                        </div>
                        <div className="sets-us-apart-tile">
                            <h3 className="text-xl font-semibold mb-2">User-Centered Thinking</h3>
                            <p className="leading-7">Real people are at the core of every decision we make.</p>
                        </div>
                        <div className="sets-us-apart-tile">
                            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                            <p className="leading-7">We’re not just vendors, we’re part of your team.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-5 mt-5 justify-center">
                        <div className="sets-us-apart-tile">
                            <h3 className="text-xl font-semibold mb-2">Creative & Technical Balance</h3>
                            <p className="leading-7">We merge design thinking with robust engineering.</p>
                        </div>
                        <div className="sets-us-apart-tile">
                            <h3 className="text-xl font-semibold mb-2">Detail-Driven Craftsmanship</h3>
                            <p className="leading-7">No corner is cut, every piece matters.</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactCTA />
        </div>
    );
}

export default About;