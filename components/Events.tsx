
import React from 'react';

interface FullImageMediaCardProps {
    image: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaLink: string;
}

const FullImageMediaCard: React.FC<FullImageMediaCardProps> = ({ image, title, subtitle, cta, ctaLink }) => (
    <div className="relative w-full pt-[125%] sm:pt-[100%] rounded-2xl overflow-hidden group">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white w-full">
            <h3 className="text-xl md:text-2xl font-medium leading-tight">{title}</h3>
            <p className="font-sans-text text-sm md:text-base mt-2">{subtitle}</p>
             <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="gl-buttons mt-4 inline-block relative overflow-hidden rounded-full py-2 px-5 text-sm font-medium transition-colors duration-300 group-inner border border-white">
                <span className={`relative z-10 transition-colors duration-300 group-hover:text-black`}>{cta}</span>
                <div className="absolute inset-0 bg-white scale-0 rounded-full transition-transform duration-300 group-hover:scale-105 z-0"></div>
            </a>
        </div>
    </div>
);

const Events: React.FC = () => {
    const events = [
        { image: 'https://picsum.photos/seed/event1/600/800', title: 'USC Makeathon in LA', subtitle: 'A makeathon with students at USC to showcase our tools and inspire them to think about creativity x AI', cta: 'Check out the winners', ctaLink: '#' },
        { image: 'https://picsum.photos/seed/event2/600/800', title: 'Creative Breakfast at LA Tech Week', subtitle: 'A breakfast at Google Playa Vista where we invite the LA creative community to participate in speed prompting competitions.', cta: 'Learn More', ctaLink: '#' },
    ];

    return (
        <section className="py-12 md:py-20 px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl text-center font-normal">Community Events</h2>
            <div className="max-w-screen-lg mx-auto mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {events.map((event, index) => (
                    <FullImageMediaCard key={index} {...event} />
                ))}
            </div>
        </section>
    );
};

export default Events;
