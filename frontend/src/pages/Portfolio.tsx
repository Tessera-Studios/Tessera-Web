import ContactCTA from "../components/ContactCTA";
import "./Portfolio.css";
import Project from "../components/Project";
import { projects } from "../data/projects";
import { categories } from "../data/categories";
import { useEffect, useState, useMemo, useRef } from "react";

function Portfolio() {
    useEffect(() => {
        document.title = 'Tessera Studios | Portfolio';
    }, []);

    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showFilters, setShowFilters] = useState(false);
    const filtersRef = useRef<HTMLDivElement | null>(null);
    const filterCategories = ['All', ...categories];

    useEffect(() => {
        function handleDocClick(e: MouseEvent) {
            if (!filtersRef.current) return;
            if (!filtersRef.current.contains(e.target as Node)) setShowFilters(false);
        }
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setShowFilters(false);
        }
        if (showFilters) {
            document.addEventListener('mousedown', handleDocClick);
            document.addEventListener('keydown', handleKey);
        }
        return () => {
            document.removeEventListener('mousedown', handleDocClick);
            document.removeEventListener('keydown', handleKey);
        };
    }, [showFilters]);

    const filtered = useMemo(() => {
        return projects.filter(p => {
            const projectCategories = p.categories ?? [p.category];
            const matchesCategory = selectedCategory === 'All'
                ? true
                : projectCategories.includes(selectedCategory) || (p.tags && p.tags.includes(selectedCategory));
            const q = query.trim().toLowerCase();
            const matchesQuery = q === '' || [p.title, p.description, p.category, ...projectCategories, ...(p.tags || [])].join(' ').toLowerCase().includes(q);
            return matchesCategory && matchesQuery;
        });
    }, [query, selectedCategory]);

    return (<>
        <div className="portfolio-page w-full min-h-[100vh] pt-16 md:pt-28 pb-8 md:pb-20 px-8 text-white flex flex-col items-stretch gap-8">
            <header className="w-full px-6 md:px-16">
                <h1 className="m-5 mb-8 text-center text-5xl md:text-6xl font-bold">Our Portfolio</h1>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="search-shell flex-1 relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/55 pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input
                            aria-label="Search projects"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Search projects, categories, or descriptions..."
                            className="search-input w-full pl-11 pr-4 py-3 rounded-[1.4rem] border border-white/10 text-white placeholder:text-white/55 focus:outline-none"
                        />
                    </div>

                    <div className="relative" ref={filtersRef}>
                        <button
                            aria-haspopup="true"
                            aria-expanded={showFilters}
                            onClick={() => setShowFilters(s => !s)}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--surface)] text-white/90 hover:opacity-95">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 5h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M6 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M10 19h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span className="sr-only">Filter</span>
                        </button>

                        {showFilters && (
                            <div className="absolute right-0 mt-2 w-56 bg-[var(--dark-purple)] border rounded-lg p-3 shadow-lg z-50 filter-popover">
                                <div className="mb-2 text-sm text-gray-300">Filter by category</div>
                                <div className="flex flex-col gap-2">
                                    {filterCategories.map(cat => (
                                        <button
                                            key={cat}
                                            role="menuitem"
                                            onClick={() => { setSelectedCategory(cat); setShowFilters(false); }}
                                            className={`filter-option text-left px-3 py-2 rounded-md text-sm ${selectedCategory === cat ? 'bg-[var(--accent)] text-white' : 'hover:bg-[var(--surface)] text-white/90'}`}>
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-3 flex justify-end">
                                    <button onClick={() => { setSelectedCategory('All'); setShowFilters(false); }} className="text-sm px-3 py-1 rounded bg-transparent text-gray-300 hover:underline">Clear</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="w-full px-6 md:px-16">
                <div className="mb-4 text-sm text-gray-300">Showing {filtered.length} project{filtered.length === 1 ? '' : 's'}{selectedCategory !== 'All' ? ` • ${selectedCategory}` : ''}</div>

                {filtered.length === 0 ? (
                    <div className="py-12 px-6 rounded-2xl bg-[var(--deep-purple)] text-center">No projects match your search or selected category.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map(project => (
                            <Project
                                key={project.id}
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                tags={project.tags}
                                link={project.link}
                                onTagClick={(tag) => { setSelectedCategory(tag); setQuery(''); }}
                            />
                        ))}
                    </div>
                )}
            </main>

        </div>
        <ContactCTA />
    </>);
}

export default Portfolio;