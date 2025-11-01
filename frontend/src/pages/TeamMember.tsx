import { useParams, Link } from 'react-router-dom';
import './About.css';
import { members } from '../data/team-members';
import './TeamMember.css'
import emblem from '../assets/tessera-emblem-white-transparent.png'

export default function TeamMember() {
    const { memberId } = useParams<{ memberId: string }>();
    const member = memberId ? members[memberId] : undefined;

    if (!member) {
        return (
            <div className="min-h-[60vh] flex flex-col justify-center items-center p-10">
                <h2 className="text-2xl font-semibold">Team member not found</h2>
                <p className="mt-4">We couldn't find that team member.</p>
                <Link to="/about" className="mt-6 underline">Back to About</Link>
            </div>
        );
    }

    return (
        <>
            <div id="member-summary" className="min-h-[100vh] p-10 flex flex-col items-center justify-center">
                <div className="flex gap-15 mt-10">
                    <img id="member-image" src={member?.image} alt={member?.name} className="w-90 h-100 object-cover rounded-lg" />
                    <div>
                        <h1 className="text-4xl font-semibold">{member?.name}</h1>
                        <p className="mt-3 text-2xl text-[var(--secondary)]">{member?.role}</p>
                        <div className="mt-3">
                            <p className="leading-7 max-w-lg">{member.bio.map((paragraph, index) => (
                                <p key={index} className='mb-6'>{paragraph}</p>
                            ))}</p>
                        </div>
                        <div className='flex gap-5 mt-5 text-2xl'>
                            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                            <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                            <a href={member.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio"><i className="fas fa-briefcase"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="key-skills" className='min-h-[60vh] px-60'>
                <h1 className='text-3xl mb-5'>Key Skills</h1>
                <div className="skills-grid">
                    {member.skills.map((skill, index) => (
                        <div key={index} className='skill py-7 px-8 rounded-md flex items-center'>
                            <img src={emblem} alt="Tessera Emblem" className="w-8 h-8 inline-block mr-3" />
                            <p>{skill}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="highlighted-achievements" className='min-h-[70vh] px-60 py-30'>
                <h1 className='text-3xl mb-5'>Highlighted Achievements</h1>
                <div className="achievements-grid">
                    {member.achievements.map((achievement, index) => (
                        <div key={index} className='achievement-card'>
                            <div className="achievement-index">{index + 1}</div>
                            <div className="achievement-text">{achievement}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
