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
                    <img src={member?.image} alt={member?.name} className="w-90 h-110 object-cover rounded-lg" />
                    <div>
                        <h1 className="text-4xl font-semibold">{member?.name}</h1>
                        <p className="mt-3 text-2xl text-[var(--secondary)]">{member?.role}</p>
                        <div className="mt-3">
                            <p className="leading-7 max-w-lg">{member.bio.map((paragraph, index) => (
                                <p key={index} className='mb-6'>{paragraph}</p>
                            ))}</p>
                        </div>
                        <div className='flex gap-3 mt-5 text-xl'>
                            <Link to={member.socialLinks.linkedin}><i className="fab fa-linkedin"></i></Link>
                            <Link to={member.socialLinks.github}><i className="fab fa-github"></i></Link>
                            <Link to={member.socialLinks.portfolio}><i className="fas fa-briefcase"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="key-skills" className='min-h-[95vh] px-60'>
                <h1 className='text-3xl mb-5'>Key Skills</h1>
                <div className="flex flex-col gap-5">
                    {member.skills.map((skill, index) => (
                        <div key={index} className='skill py-7 px-8 rounded-md flex items-center'>
                            <img src={emblem} alt="Tessera Emblem" className="w-8 h-8 inline-block mr-2" />
                            <p>{skill}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="highlighted-achievements" className='min-h-[70vh] px-60'>
                <h1 className='text-3xl mb-5'>Highlighted Achievements</h1>
                <ul className='list-disc pl-5'>
                    {member.achievements.map((achievement, index) => (
                        <li key={index} className='py-2 leading-8'>{achievement}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
