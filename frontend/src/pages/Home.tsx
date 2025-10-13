import "./Home.css"
import ContactCTA from "../components/ContactCTA";
import ourApproachImage from "../assets/our-approach.png"
import tesseraTileImage from "../assets/tessera-emblem-light-purple-transparent.png"
import tesseraWhiteTileImage from "../assets/tessera-emblem-white-transparent.png"
import emblem from '/tessera-emblem.png';
import Silk from "../components/Silk.tsx";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="overflow-x-hidden">
                <div id="home-landing" className="flex flex-col justify-center items-center min-h-[100vh] p-5 md:p-10">
                        <img src={emblem} alt="Tessera Studios Emblem" className="block lg:hidden" width={150} height={150} />
                        <h1 className="text-3xl xl:text-4xl p-4 font-semibold leading-10">Building Your Vision, <br className="block md:hidden"></br> One Piece at a Time</h1>
                        <p className="text-md lg:text-lg xl:text-xl text-[var(--light-grey)] mb-2 md:mb-0">Software Design & Development Services</p>
                        <button id="build-button" className="mt-6"><Link to="/contact">Let's Build!</Link></button>
                </div>

                <div id="home-what-we-do" className="flex flex-col justify-center items-center min-h-[35vh] bg-white text-black p-8 md:p-15">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-2">What We Do</h2>
                    <p className="text-center md:max-w-[75vw] lg:max-w-[35vw] py-2 leading-7">At Tessera Studios, we design and develop software solutions that are custom, flexible, and built for real impact.</p>
                    <button id="learn-more-button" className="mt-4 md:mt-6"><Link to="/services">Learn More</Link></button>
                </div>

                <div id="home-our-approach" className="flex flex-col lg:flex-row justify-center items-center min-h-[75vh] p-8 py-20 md:p-20">
                    <div className="image-container md:mr-5 mb-10 lg:mb-0">
                        <img className="our-approach-image" alt="Our Approach" src={ourApproachImage} width={300} height={300} />
                        <div className="inner-shadow"></div>
                    </div>
                    <div className="text-container p-5 md:p-10 md:max-w-[50vw] lg:max-w-[35vw]">
                        <h2 className="text-3xl md:text-5xl mb-5 font-semibold text-center md:text-start">Our Approach</h2>
                        <div className="flex flex-col gap-6 md:text-lg">
                            <p>Our process combines design thinking with technical execution.</p>
                            <p>We pride ourselves on putting real users and business goals at the heart of every decision.</p>
                            <p>From design to development, we keep the user at the center.</p>
                        </div>
                    </div>
                </div>


                <div
                    id="home-why-choose-tessera"
                    className="relative flex flex-col justify-center items-center min-h-[60vh] p-10 overflow-hidden"
                >
                    <div className="absolute inset-0 -z-10">
                        <Silk
                            speed={5}
                            scale={1}
                            color="#121212ff"
                            noiseIntensity={0.6}
                            rotation={90}
                        />
                    </div>

                    <h2 className="text-2xl md:text-3xl text-center font-semibold">Why Choose Tessera?</h2>

                    <div id="tessera-tiles" className="md:flex gap-2 p-8">
                        <div className="flex gap-2 justify-center">
                            <div className="tessera-tile min-w-[25vw] md:min-w-[15vw] lg:min-w-[10vw]">
                                <img src={tesseraTileImage} alt="Creativity Emblem" width={50} height={50} />
                                <p className="text-sm md:text-base">Creativity</p>
                            </div>
                            <div className="tessera-tile min-w-[25vw] md:min-w-[15vw] lg:min-w-[10vw]">
                                <img src={tesseraWhiteTileImage} alt="Precision Emblem" width={50} height={50} />
                                <p className="text-sm md:text-base">Precision</p>
                            </div>
                            <div className="tessera-tile min-w-[25vw] md:min-w-[15vw] lg:min-w-[10vw]">
                                <img src={tesseraTileImage} alt="Collaboration Emblem" width={50} height={50} />
                                <p className="text-sm md:text-base">Collaboration</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-2 md:mt-0 justify-center">
                            <div className="tessera-tile min-w-[25vw] md:min-w-[15vw] lg:min-w-[10vw]">
                                <img src={tesseraWhiteTileImage} alt="Innovation Emblem" width={50} height={50} />
                                <p className="text-sm md:text-base">Innovation</p>
                            </div>
                            <div className="tessera-tile min-w-[25vw] md:min-w-[15vw] lg:min-w-[10vw]">
                                <img src={tesseraTileImage} alt="User Focus Emblem" width={50} height={50} />
                                <p className="text-sm md:text-base">User Focus</p>
                            </div>
                        </div>

                    </div>
                    <p className="text-center p-5 lg:max-w-[40vw]">We don’t do one-size-fits-all. Every project is a custom composition, carefully built to align with your unique vision.</p>
                </div>

                <div id="home-vision" className="flex justify-center items-center min-h-[30vh] bg-[var(--deep-purple)] border-t-3 border-b-3 border-[var(--accent)] p-10">
                    <p className="text-2xl md:text-3xl text-center">Every Vision Matters. <span className="text-[var(--secondary)]">Especially Yours.</span></p>
                </div>

                <ContactCTA />
            </div>
        </>
    );
}

export default Home;