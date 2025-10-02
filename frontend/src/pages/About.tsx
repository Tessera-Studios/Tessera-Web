import emblem from '../../public/tessera-emblem.png';
import landingImage from "../assets/about-landing.png"
import ourApproachImage from "../assets/our-approach.png";
import missionVisionBg from "../assets/vision-mision.mp4"
import ContactCTA from '../components/ContactCTA';

function About() {
    return (
        <div className="overflow-x-hidden">
            <div id="about-landing" className="flex justify-center items-center min-h-[100vh] p-5 md:p-20" style={{ backgroundImage: `url(${landingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='mr-10'> <img src={emblem} alt="Tessera Emblem" width={300} /></div>
                <div className="w-[35vw]">
                    <h2 className='text-3xl mb-3 font-semibold'>Every Digital Experience is a Mosaic</h2>
                    <p className='leading-8'>At Tessera Studios, we believe digital products should feel like art—thoughtfully composed, built with care, and deeply connected to the people who use them.
                        <br /><br />Our name comes from tesserae, the small, individual pieces of a mosaic—each one essential to the bigger picture.</p>
                </div>
            </div>

            <div id="about-who-we-are" className="flex justify-center items-center min-h-[75vh] p-5 md:p-20">
                <div className="w-[36vw] md:p-2">
                    <h2 className='text-5xl mb-5 font-semibold'>Who We Are</h2>
                    <p className='leading-8'>We’re a creative team driven by a shared passion for building meaningful digital experiences.
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

                <div className="vision-mission-tile p-20 rounded-lg text-white max-w-4xl z-10 bg-[linear-gradient(to_left,var(--dark-purple),var(--accent))] mr-10 text-center w-[30vw]">
                    <h2 className='text-4xl mb-5 font-semibold'>Our Vision</h2>
                    <p>To be the leading creator of modular, user-centered digital experiences that blend design, technology, and storytelling—empowering businesses and enriching lives, globally.</p>
                </div>
                <div className="vision-mission-tile p-20 rounded-lg text-white max-w-4xl z-10 bg-[linear-gradient(to_right,var(--dark-purple),var(--accent))] ml-10 text-center w-[30vw]">
                    <h2 className='text-4xl mb-5 font-semibold'>Our Mission</h2>
                    <p>To craft innovative, scalable digital solutions that are as thoughtful as they are powerful—connecting clients with their users through precision, creativity, and care.</p>
                </div>
            </div>

            <div id="about-what-sets-us-apart" className="flex flex-col justify-center items-center min-h-[50vh] p-10">
                <h2 className="text-3xl md:text-4xl font-semibold mb-2">What Sets Us Apart</h2>
            </div>

            <ContactCTA />
        </div>
    );
}

export default About;