import { PortfolioData, BannerCardData, SessionCardData, CommunityCardData } from './types';

export const portfolioData: PortfolioData = {
  "personalInfo": {
    "name": "Dimitris Vatistas",
    "title": "Web Developer & Web Designer",
    "bio": "I'm Dimitris Vatistas, a developer and designer passionate about crafting digital products that balance aesthetics with functionality. My work spans the full creative and technical process — from wireframing in Figma and prototyping in Framer, to building production-ready applications in React and Next.js."
  },
  "workExperience": [
    {
      "role": "Founder & CEO",
      "company": "QRoyal",
      "period": "2023 - Present"
    },
    {
      "role": "Developer",
      "company": "AI Beauty",
      "period": "2022 - 2023"
    },
    {
      "role": "Developer",
      "company": "AI Age Verification",
      "period": "2022"
    }
  ],
  "connect": {
    "email": "vatistasdim.ae@icloud.com",
    "socialLinks": [
      {
        "platform": "X",
        "url": "https://x.com/vatistasdim"
      },
      {
        "platform": "Instagram",
        "url": "https://www.instagram.com/vatistasdimitris/"
      }
    ]
  },
  "projects": [
    {
      "title": "GenGlow",
      "description": "An AI-powered platform that generates personalized skincare routines based on user preferences and skin profiles.",
      "url": "https://genglow.vercel.app/",
      "content": ""
    },
    {
      "title": "MoodMenu",
      "description": "A smart menu generator that creates meal recommendations based on mood and dietary preferences.",
      "url": "https://moodmenu.vercel.app/",
      "content": ""
    },
    {
      "title": "QBIT AI",
      "description": "An AI-powered assistant designed to help users manage tasks and queries efficiently.",
      "url": "https://qbitai.vercel.app/",
      "content": ""
    },
    {
      "title": "ImageFM",
      "description": "A creative AI platform that generates images from user prompts with a music-inspired twist.",
      "url": "https://imagefm.vercel.app/",
      "content": ""
    },
    {
      "title": "AI Digrm",
      "description": "An AI diagram generator that converts text into structured, visual diagrams instantly.",
      "url": "https://ai-digrm.vercel.app/",
      "content": ""
    },
    {
      "title": "Fortnite Vibe Coder",
      "description": "A playful project that codes custom Fortnite-inspired 'vibes' into experiences.",
      "url": "https://fortnitevibecoder.vercel.app/",
      "content": ""
    },
    {
      "title": "QRoyal",
      "description": "A smart digital loyalty program that replaces physical cards with one universal QR-based pass.",
      "url": "https://qroyal.vercel.app/",
      "content": ""
    },
    {
      "title": "AI Age Verification",
      "description": "A secure, privacy-first system for frictionless AI-based age verification.",
      "url": "https://ai-age-verification.vercel.app/",
      "content": ""
    }
  ]
};

// FIX: Add bannerCards data for BannerCarousel component.
export const bannerCards: BannerCardData[] = [
    {
        color: '#fafa5f',
        optionalHeader: 'Featured',
        title: 'QRoyal',
        body: 'A smart digital loyalty program that replaces physical cards with one universal QR-based pass.',
        cta: 'View Project',
        ctaLink: 'https://qroyal.vercel.app/',
    },
    {
        color: '#8f9aff',
        optionalHeader: 'Creative AI',
        title: 'ImageFM',
        body: 'A creative AI platform that generates images from user prompts with a music-inspired twist. Explore the intersection of art and sound.',
        cta: 'Explore ImageFM',
        ctaLink: 'https://imagefm.vercel.app/',
    },
    {
        color: '#ffb1ee',
        optionalHeader: 'Personalized Skincare',
        title: 'GenGlow',
        body: 'An AI-powered platform that generates personalized skincare routines based on user preferences and skin profiles.',
        cta: 'Discover GenGlow',
        ctaLink: 'https://genglow.vercel.app/',
    },
    {
        color: '#5e9bff',
        optionalHeader: 'Smart Meal Generator',
        title: 'MoodMenu',
        body: 'A smart menu generator that creates meal recommendations based on mood and dietary preferences.',
        cta: 'Try MoodMenu',
        ctaLink: 'https://moodmenu.vercel.app/',
    },
    {
        color: '#ff8e59',
        optionalHeader: 'AI Assistant',
        title: 'QBIT AI',
        body: 'An AI-powered assistant designed to help users manage tasks and queries efficiently.',
        cta: 'Meet QBIT AI',
        ctaLink: 'https://qbitai.vercel.app/',
    },
];

// FIX: Add sessionCards data for Sessions component.
export const sessionCards: SessionCardData[] = [
    {
        color: '#ffb1ee',
        poster: 'https://picsum.photos/seed/session1/800/450',
        title: 'Creative Coding with AI',
        subtitle: 'Exploring generative art with JavaScript and Gemini.',
        cta: 'Watch Now',
        ctaLink: '#',
        liveText: {
            template: 1,
            section1: 'LIVE FROM THE LAB',
            section2: 'SESSION 01',
            section3: '2024'
        }
    },
    {
        color: '#5e9bff',
        poster: 'https://picsum.photos/seed/session2/800/450',
        title: 'Designing with AI',
        subtitle: 'A deep dive into UI/UX design enhanced by AI tools.',
        cta: 'Watch Now',
        ctaLink: '#',
        liveText: {
            template: 1,
            section1: 'LIVE FROM THE LAB',
            section2: 'SESSION 02',
            section3: '2024'
        }
    },
    {
        color: '#ff8e59',
        poster: 'https://picsum.photos/seed/session3/800/450',
        title: 'AI in Web Development',
        subtitle: 'How AI is changing the way we build websites.',
        cta: 'Watch Now',
        ctaLink: '#',
        liveText: {
            template: 4,
            section1: 'SPECIAL EVENT',
            section2: 'GUEST',
            section3: 'SPEAKER',
            section4: 'Q&A',
            section5: 'LIVE',
        }
    },
    {
        color: '#daef68',
        poster: 'https://picsum.photos/seed/session4/800/450',
        title: 'The Future of AI',
        subtitle: 'A panel discussion on what\'s next in AI.',
        cta: 'Watch Now',
        ctaLink: '#',
        liveText: {
            template: 1,
            section1: 'LIVE FROM THE LAB',
            section2: 'SESSION 03',
            section3: '2024'
        }
    },
];

// FIX: Add communityCards data for CommunityGallery component.
export const communityCards: CommunityCardData[] = [
    {
        type: 'image',
        color: '#ffb1ee',
        label: 'AI Art',
        labelLink: '#',
        author: 'User123',
        title: 'Cybernetic Dreams',
        image: 'https://picsum.photos/seed/comm1/400/520',
    },
    {
        type: 'music',
        color: '#5e9bff',
        label: 'AI Music',
        labelLink: '#',
        author: 'MusicMaker',
        title: 'Lo-fi Beats to Code to',
        audio: 'https://storage.googleapis.com/labs-public/gallery-assets/google-io/music/lo-fi.mp3',
    },
    {
        type: 'image',
        color: '#ff8e59',
        label: 'AI Photography',
        labelLink: '#',
        author: 'PhotoGal',
        title: 'Sunset over Mars',
        image: 'https://picsum.photos/seed/comm2/400/520',
    },
    {
        type: 'music',
        color: '#daef68',
        label: 'Generative Audio',
        labelLink: '#',
        author: 'SoundWave',
        title: 'Ambient Scapes',
        audio: 'https://storage.googleapis.com/labs-public/gallery-assets/google-io/music/ambient.mp3',
    },
    {
        type: 'image',
        color: '#8f9aff',
        label: 'AI Illustration',
        labelLink: '#',
        author: 'ArtBot',
        title: 'The Last Robot',
        image: 'https://picsum.photos/seed/comm3/400/520',
    },
];