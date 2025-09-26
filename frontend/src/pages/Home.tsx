import { useRef } from "react";
import "./Home.css"

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
        <div id="home-landing" className="flex flex-col justify-center items-center h-[100vh]"
            onMouseMove={handleMouseMove}>
            <h1 className="text-2xl lg:text-3xl xl:text-4xl p-4 font-semibold">Building Your Vision, One Piece at a Time</h1>
            <p className="text-md lg:text-lg xl:text-xl text-[var(--light-grey)]">Software Design & Development Services</p>
            <button id="build-button" className="mt-6">Let's Build!</button>
            <div ref={shadowRef} className="mouse-shadow"></div>
        </div>
    )

}
export default Home;