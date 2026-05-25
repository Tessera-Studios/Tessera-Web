import flexaImg from '../assets/projects/flexa.png';
import carisurgImg from '../assets/projects/carisurg.png';
import resonationLifestyleImg from '../assets/projects/resonation-lifestyle.png';
import pocketCareImg from '../assets/projects/pocket-care.png';
import potholePatrolImg from '../assets/projects/pothole-patrol.png';

export const projects = [
    {
        id: 'resonation-lifestyle',
        title: 'Resonation Lifestyle',
        description: 'Refreshed the corporate website with UI design improvements and seamlessly migrated existing content to a modernized platform.',
        category: 'Web Development',
        categories: ['Software Development', 'Health Tech'],
        tags: ['web', 'health', 'wellness', 'ui/ux', 'software development'],
        image: resonationLifestyleImg,
        link: 'https://resonationlifestyle.com/'
    },
    {
        id: 'carisurg-marketing',
        title: 'CariSurg Marketing Management',
        description: 'Executed comprehensive marketing strategies to enhance brand visibility and drive customer engagement across multiple channels.',
        category: 'Marketing',
        categories: ['Marketing'],
        tags: ['marketing', 'branding', 'content creation', 'strategy'],
        image: carisurgImg,
        link: null 
    },
    {
        id: 'pocket-care',
        title: 'Pocket Care (Prototype)',
        description: 'Designed a mobile app prototype enabling patients to seamlessly share their medical histories with healthcare providers for holistic, comprehensive care.',
        category: 'Health Tech',
        categories: ['Health Tech', 'Software Development'],
        tags: ['mobile', 'health', 'ui/ux', 'figma', 'prototyping'],
        image: pocketCareImg,
        link: 'https://www.figma.com/proto/1q8ro51SNI3UTb8ISjALHP/PocketCare?node-id=61-2005&p=f&t=25luWk7yObxhfVZm-0&scaling=scale-down&content-scaling=fixed&page-id=61%3A1272&starting-point-node-id=61%3A1274'
    },
    {
        id: 'flexa',
        title: 'Flexa',
        description: 'Developed a cross-platform stretch reminder application that synchronizes across devices to promote healthy work habits and sustained focus.',
        category: 'Software Development',
        categories: ['Software Development', 'Health Tech'],
        tags: ['mobile', 'desktop', 'wellness', 'flutter', 'electron'],
        image: flexaImg,
        link: null
    },
    {
        id: 'pothole-patrol',
        title: 'Pothole Patrol (Prototype)',
        description: 'Created a community-based platform that empowers users to report and track potholes in their area, contributing to safer roads and improved infrastructure.',
        category: 'Software Development',
        categories: ['Software Development'],
        tags: ['mobile', 'community', 'transport', 'reporting'],
        image: potholePatrolImg,
        link: 'https://www.figma.com/proto/ox4Z9jnhjMqtF516Ho78yO/Pothole-Patrol?node-id=183-445&starting-point-node-id=183%3A445'
    }
];