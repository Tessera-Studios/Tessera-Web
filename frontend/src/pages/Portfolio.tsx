import ContactCTA from "../components/ContactCTA";
import "./Portfolio.css";
import Project from "../components/Project";
import { projects } from "../data/projects";

function Portfolio() {
    return <>
        <div id="portfolio" className="w-full min-h-[100vh] p-30 flex flex-col items-center text-white   ">
            <h1 className="text-4xl font-semibold mb-8">Our Work</h1>
            <p className="text-lg max-w-2xl text-center">From innovative designs to cutting-edge solutions, see how we bring ideas to life and deliver exceptional results for our clients.</p>
        </div>

        <div id="software-development" className="w-full min-h-60 bg-[var(--deep-purple)] flex flex-col items-center justify-center p-20">
            <h2 className="text-2xl font-semibold mb-4">Software Development</h2>
            {/* <div className="">
                <input
                    type="text"
                    placeholder="Search Projects..."
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div> */}

            <div className="mt-4 flex gap-6">
                {projects.filter(project => project.category === 'Software Development').map(project => (
                    <Project key={project.id} title={project.title} image={project.image} description={project.description} />
                ))}
            </div>
        </div>

        <div id="marketing" className="w-full min-h-60 flex flex-col items-center justify-center p-20">
            <h2 className="text-2xl font-semibold mb-4">Marketing</h2>
            {/* <div className="">
                <input
                    type="text"
                    placeholder="Search Campaigns..."
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div> */}
            <div className="mt-4 flex gap-6">
                {projects.filter(project => project.category === 'Marketing').map(project => (
                    <Project key={project.id} title={project.title} image={project.image} description={project.description} />
                ))}
            </div>
        </div>

        <ContactCTA />
    </>;
}
export default Portfolio;