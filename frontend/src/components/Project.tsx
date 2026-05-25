function Project({ title, image, description, tags, onTagClick, link }: { title?: string; image?: string; description?: string; tags?: string[]; onTagClick?: (tag: string) => void; link?: string | null }) {
    const isClickable = Boolean(link);
    const cardClasses = `project group flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--deep-purple)] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-6 ${isClickable ? 'hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70' : ''}`;
    const cardContent = (
        <>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/10">
                <img
                    src={image}
                    alt={title || "Project"}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                />
            </div>

            <div className="mt-5 flex flex-1 flex-col gap-4">
                <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
                    <p className="mt-2 leading-7 text-white/78">{description}</p>
                </div>

            {tags && tags.length > 0 && (
                <div className="project-tags mt-auto flex flex-wrap gap-2 pt-1">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={(e) => {
                                if (isClickable) {
                                    e.preventDefault();
                                }
                                e.stopPropagation();
                                onTagClick?.(tag);
                            }}
                            className="project-tag rounded-full px-3 py-1 text-sm text-white/90"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            )}
            </div>
        </>
    );

    return (
        isClickable && link ? (
            <a className={cardClasses} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title || 'project'}`}>
                {cardContent}
            </a>
        ) : (
            <div className={cardClasses}>
                {cardContent}
            </div>
        )
    );
}

export default Project;