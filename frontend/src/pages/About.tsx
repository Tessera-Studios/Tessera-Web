import emblem from '/tessera-emblem.png';
import landingImage from "../assets/about-landing.png";
import ourApproachImage from "../assets/our-approach.png";
import missionVisionBg from "../assets/vision-mision.mp4"
import ContactCTA from '../components/ContactCTA';
import "./About.css";
import tarikaImage from "../assets/tarika-birch-team-tile.png";
import isaiahImage from "../assets/isaiah-carrington-team-tile.png";
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function About() {
    const intervalRef = useRef<number | null>(null);

    function cycleTiles(direction: 1 | -1 = 1) {
        const tiles = document.querySelectorAll<HTMLElement>('.sets-us-apart-tile');
        tiles.forEach((tile) => {
            const currentIndex = parseInt(tile.id.split('-')[1]);
            const nextIndex = direction === 1
                ? (currentIndex < 5 ? currentIndex + 1 : 1)
                : (currentIndex > 1 ? currentIndex - 1 : 5);
            tile.id = `tile-${nextIndex}`;
        });
    }

    const restartInterval = () => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
            cycleTiles(-1);
        }, 5500);
    };

    useEffect(() => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
            cycleTiles(-1);
        }, 5500);
        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <>
            <div className="overflow-x-hidden">
                <div id="about-landing" className="flex flex-col lg:flex-row justify-center items-center min-h-[110vh] md:min-h-[100vh] px-10 md:p-20" style={{ backgroundImage: `url(${landingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='md:mr-10 px-20 md:p-0'> <img src={emblem} alt="Tessera Studios Emblem" width={300} /></div>
                    <div className="mt-5 lg:mt-0 lg:w-[45vw] pb-30 lg:pb-0">
                        <h2 className='text-lg md:text-3xl lg:text-4xl mb-3 font-bold md:font-semibold'>Every Digital Experience Is A Mosaic</h2>
                        <p className='leading-7 md:leading-8'>At Tessera Studios, we believe digital products should feel like art—thoughtfully composed, built with care, and deeply connected to the people who use them.
                            <br /><br />Our name comes from tesserae, the small, individual pieces of a mosaic—each one essential to the bigger picture.</p>
                    </div>
                </div>

                <div id="about-who-we-are" className="flex flex-col md:flex-row justify-center items-center min-h-[100vh] md:min-h-[75vh] px-10 py-25 md:p-20 text-white">
                    <div className="lg:w-[36vw] md:p-2 py-10">
                        <h2 className='text-5xl mb-5 font-semibold'>Who We Are</h2>
                        <p className='leading-7 md:leading-8 text-base'>We’re a creative team driven by a shared passion for building meaningful digital experiences.
                            <br /><br /> At Tessera Studios, users come first—every product we design and build is rooted in real human needs and thoughtful problem-solving.
                            <br /><br /> We’re committed to crafting immersive, flexible solutions that reflect your vision and deliver real impact.
                        </p>
                    </div>
                    <div className="image-container md:ml-10">
                        <img className="our-approach-image" alt="Our Approach" src={ourApproachImage} width={350} />
                        <div className="inner-shadow"></div>
                    </div>

                </div>

                <div id="about-vision-mission" className="relative flex justify-center items-center min-h-[100vh] p-10 md:p-20">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src={missionVisionBg} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-[var(--dark-purple)] opacity-65 z-5"></div>

                    <div className="flex flex-col lg:flex-row justify-center items-center md:p-20 gap-10 lg:gap-0">
                        <div className="vision-mission-tile p-10 md:p-15 rounded-lg text-white z-10 bg-[linear-gradient(to_left,var(--dark-purple),var(--accent))] lg:mr-10 text-center min-w-[20vw]">
                            <h2 className='text-4xl mb-5 font-semibold'>Our Vision</h2>
                            <p className='text-start leading-8'>To be the leading creator of modular, user-centered digital experiences that blend design, technology, and storytelling—empowering businesses and enriching lives, globally.</p>
                        </div>
                        <div className="vision-mission-tile p-10 md:p-15 rounded-lg text-white z-10 bg-[linear-gradient(to_right,var(--dark-purple),var(--accent))] lg:ml-10 text-center min-w-[20vw]">
                            <h2 className='text-4xl mb-5 font-semibold'>Our Mission</h2>
                            <p className='text-start leading-8'>To craft innovative, scalable digital solutions that are as thoughtful as they are powerful—connecting clients with their users through precision, creativity, and care.</p>
                        </div>
                    </div>
                </div>

                <div id="about-what-sets-us-apart" className="flex flex-col items-center sm:min-h-[100vh] md:min-h-[70vh] lg:min-h-[100vh] min-h-[100vh] p-10 py-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8">What Sets Us Apart</h2>

                    <div id="sets-us-apart-tiles" className='md:px-20'>
                        <button
                            id="chev-left"
                            type="button"
                            aria-label="Previous"
                            className="carousel-chevron"
                            onClick={() => { cycleTiles(1); restartInterval(); }}
                        >
                            <i className="material-icons">chevron_left</i>
                        </button>
                        <button
                            id="chev-right"
                            type="button"
                            aria-label="Next"
                            className="carousel-chevron"
                            onClick={() => { cycleTiles(-1); restartInterval(); }}
                        >
                            <i className="material-icons">chevron_right</i>
                        </button>
                        <div id="tile-1" className="sets-us-apart-tile flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-semibold mb-2">Modularity</h3>
                            <i className="material-icons">token</i>
                            <p className="md:leading-7">Every project is built to scale: flexible, adaptable, and future-ready.</p>
                        </div>
                        <div id="tile-2" className="sets-us-apart-tile flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-semibold mb-2">User-Centered Thinking</h3>
                            <i className="material-icons">diversity_1</i>
                            <p className="md:leading-7">Real people are at the core of every decision we make.</p>
                        </div>
                        <div id="tile-3" className="sets-us-apart-tile flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-semibold mb-2">Collaboration</h3>
                            <i className="material-icons">diversity_3</i>
                            <p className="md:leading-7">We’re not just vendors, we’re part of your team.</p>
                        </div>
                        <div id="tile-4" className="sets-us-apart-tile flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-semibold mb-2">Creative & Technical Balance</h3>
                            <i className="material-icons">draw</i>
                            <p className="md:leading-7">We merge design thinking with robust engineering.</p>
                        </div>
                        <div id="tile-5" className="sets-us-apart-tile flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-semibold mb-2">Detail-Driven Craftsmanship</h3>
                            <i className="material-icons">extension</i>
                            <p className="md:leading-7">No corner is cut, every piece matters.</p>
                        </div>
                    </div>
                </div>

                <div id="about-our-team" className="flex flex-col justify-center items-center md:min-h-[70vh] min-h-[100vh] p-15 md:p-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8">Our Tesseras</h2>
                        <div className="team-members-container md:flex md:gap-6">
                            <Link to="/team/tarika" className="team-member-card" style={{ backgroundImage: `url(${tarikaImage})` }}>
                                <h1 className="team-member-name font-semibold">Tarika Birch</h1>
                                <p className="team-member-role opacity-85">Founder</p>
                                <button className='view-profile-button hidden'>View Profile</button>
                            </Link>
                            <Link to="/team/isaiah" className="team-member-card" style={{ backgroundImage: `url(${isaiahImage})` }}>
                                <h1 className="team-member-name font-semibold">Isaiah Carrington</h1>
                                <p className="team-member-role opacity-85">Technical Co-Founder</p>
                                <button className='view-profile-button hidden'>View Profile</button>
                            </Link>
                        </div>
                </div>

                <ContactCTA />
            </div>
        </>
    );
}

export default About;