import ContactCTA from "../components/ContactCTA";
import "./Portfolio.css";
import Project from "../components/Project";
import { projects } from "../data/projects";
import { useEffect } from "react";

function Portfolio() {
    useEffect(() => {
        document.title = 'Tessera Studios | Portfolio';
    }, []);

    return <>
        <div id="portfolio" className="w-full min-h-[100vh] p-30 flex flex-col items-center text-white">
        </div>

        <div id="software-development" className="w-full min-h-60 bg-[var(--deep-purple)] flex flex-col items-center justify-center md:p-20 p-8">
            <h2 className="text-3xl font-semibold mb-4 md:text-start text-center">Software Development</h2>
            {/* <div className="">
                <input
                    type="text"
                    placeholder="Search Projects..."
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div> */}

            <div className="mt-4 flex flex-col md:flex-row gap-6">
                {projects.filter(project => project.category === 'Software Development').map(project => (
                    <Project key={project.id} title={project.title} image={project.image} description={project.description} />
                ))}
            </div>
        </div>

        <div id="marketing" className="w-full min-h-60 flex flex-col items-center justify-center md:p-20 p-8">
            <h2 className="text-3xl font-semibold mb-4 md:text-start text-center">Marketing</h2>
            {/* <div className="">
                <input
                    type="text"
                    placeholder="Search Campaigns..."
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div> */}
            <div className="mt-4 flex flex-col md:flex-row gap-6">
                {projects.filter(project => project.category === 'Marketing').map(project => (
                    <Project key={project.id} title={project.title} image={project.image} description={project.description} />
                ))}
            </div>
        </div>

        <ContactCTA />
    </>;
}
export default Portfolio;