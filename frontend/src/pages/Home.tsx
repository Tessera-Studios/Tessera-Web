import { useRef } from "react";
import "./Home.css"
import ourApproachImage from "../assets/our-approach.png"

function Home() {
    const shadowRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!shadowRef.current) return;

        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        shadowRef.current.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
    };

    return (
        <>
            <div id="home-landing" className="flex flex-col justify-center items-center h-[100vh]"
                onMouseMove={handleMouseMove}>
                <h1 className="text-2xl lg:text-3xl xl:text-4xl p-4 font-semibold">Building Your Vision, One Piece at a Time</h1>
                <p className="text-md lg:text-lg xl:text-xl text-[var(--light-grey)]">Software Design & Development Services</p>
                <button id="build-button" className="mt-6">Let's Build!</button>
                <div ref={shadowRef} className="mouse-shadow"></div>
            </div>

            <div id="home-what-we-do" className="flex flex-col justify-center items-center h-[40vh] bg-white text-black p-20">
                <h2 className="text-2xl lg:text-3xl font-bold text-[var(--accent)] mb-2">What We Do</h2>
                <p className="text-center md:max-w-[35vw] py-2 leading-7">At Tessera Studios, we design and develop software solutions that are custom, flexible, and built for real impact.</p>
                <button id="learn-more-button" className="mt-6">Learn More</button>
            </div>

            <div id="home-our-approach" className="flex justify-center items-center h-[75vh] p-20">
                <div className="image-container mr-5">
                    <img className="our-approach-image" src={ourApproachImage} width={300} height={300} />
                    <div className="inner-shadow"></div>
                </div>
                <div className="text-container p-10 max-w-[35vw]">
                    <h2 className="text-lg md:text-5xl mb-5 font-semibold">Our Approach</h2>
                    <div className="flex flex-col gap-6 text-lg">
                        <p>Our process combines design thinking with technical execution.</p>
                        <p>We pride ourselves on putting real users and business goals at the heart of every decision.</p>
                        <p>From design to development, we keep the user at the center.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;