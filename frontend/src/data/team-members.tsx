import tarikaImage from "../assets/tarika-birch.jpg";
import isaiahImage from "../assets/isaiah-carrington.jpg";

type MembersList = {
    name: string;
    role: string;
    bio: string[];
    image: string;
    skills: string[];
    socialLinks: { [key: string]: string };
    achievements: string[];
}

export const members: Record<string, MembersList> = {
    tarika: {
        name: 'Tarika Birch',
        role: 'Founder',
        bio: [
            'Tarika Birch is a Software Engineer and Creative Technologist passionate about blending art and technology to craft meaningful digital experiences.', 
            'With experience spanning software engineering, UI/UX, and graphic design, she brings both technical depth and a designer’s eye to building products that inspire and engage.'
        ],
        image: tarikaImage,
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/tarika-birch',
            github: 'https://github.com/TaigaTi',
            portfolio: 'https://taigati.github.io',
        },
        skills: [
            'Software Development',
            'UIUX Design',
            'Graphic Design',
            'Branding & Marketing',
            'Project Management',
        ],
        achievements: [
            'BSc. Computer Science with Management, First Class Honours',
            '2025 Health Tech Fellow, Machine Learning - FluoretiQ in collaboration with FutureHealth ',
            '2024/25 Vice President, Computer Science Society, UWI',
            '2025 Winner of the Windrush I Accelerator Program - Microsoft UK and UWI',
            '3rd Place, Barbados AI Fraud Detection Hackathon - Zindi',
            'Faculty of Science and Technology Student Award, Deans List - FST, UWI',
            'Incentive Award for Excellence In Visual Arts - NIFCA',
        ]
    },
    isaiah: {
        name: 'Isaiah Carrington',
        role: 'Technical Co-Founder',
        bio: [
            'Isaiah Carrington is a Software Engineer and problem solver passionate about building utility-driven solutions that empower both developers and everyday users.', 
            'With experience spanning full-stack engineering, cloud-native development, and automation, he combines technical precision with a practical mindset to design tools that simplify workflows, enhance productivity, and redefine limits.'
        ],
        image: isaiahImage,
        skills: [
            'Full Stack Development',
            'Software Automation',
            'Problem Solving',
            'Agile Methodologies',
            'Version Control',
        ],
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/isaiah-carrington',
            github: 'https://github.com/IsaiahSama',
            portfolio: 'https://isaiahsama.github.io/',
        },
        achievements: [
            '2024/25 President, Computer Science Society, UWI ',
            '2023/24 Former Head Developer, Computer Science Society, UWI',
            '2023/24 CMP Chairperson - FST, UWI ',
            'Zindi Ambassador, Barbados',
            '3rd Place, Barbados AI Fraud Detection Hackathon - Zindi',
            'Faculty of Science and Technology Student Award, Deans List - FST, UWI',
        ]
    },
};