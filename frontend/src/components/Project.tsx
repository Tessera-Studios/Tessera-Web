function Project({ title, image, description }: { title?: string; image?: string; description?: string }) {
    return (
        <div className="project flex flex-col items-center bg-[var(--dark-purple)] p-10 rounded-4xl shadow-md">
            <h3 className="text-xl text-center md:text-start font-semibold mb-3">{title}</h3>
            <img src={image} alt={title || "Project"} className="mb-4 rounded-md md:h-70 shadow-md object-cover" /> 
            <p className="md:text-center mb-4 max-w-lg">{description}</p>
            {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">View Details</button> */}
        </div>
    );
}

export default Project;