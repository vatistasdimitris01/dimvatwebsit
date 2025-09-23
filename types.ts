export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ConnectInfo {
  email: string;
  socialLinks: SocialLink[];
}

export interface Project {
  title: string;
  description: string;
  url: string;
  content: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperienceItem[];
  connect: ConnectInfo;
  projects: Project[];
}

// FIX: Add BannerCardData interface for BannerCarousel component.
export interface BannerCardData {
    color: string;
    optionalHeader?: string;
    title: string;
    body: string;
    cta: string;
    ctaLink: string;
}

// FIX: Add SessionCardData interface for Sessions component.
export interface SessionCardData {
    color: string;
    poster: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaLink: string;
    liveText: {
        template: number;
        section1: string;
        section2: string;
        section3: string;
        section4?: string;
        section5?: string;
    };
}

// FIX: Add CommunityCardData interface for CommunityGallery component.
export interface CommunityCardData {
    type: 'image' | 'music';
    color: string;
    label: string;
    labelLink: string;
    author: string;
    title: string;
    image?: string;
    audio?: string;
}