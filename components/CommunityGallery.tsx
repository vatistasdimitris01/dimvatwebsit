import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CommunityCardData } from '../types';
import { communityCards } from '../constants';

// FIX: Destructure `card` from props to make it available in the component.
const MusicPlayerCard: React.FC<{ card: CommunityCardData }> = ({ card }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const waveCount = 20;

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative w-full h-full rounded-2xl lg:rounded-3xl p-4 flex flex-col items-center justify-center" style={{ backgroundColor: card.color }}>
            <a href={card.labelLink} className="absolute top-4 right-4 bg-white text-black text-xs font-medium py-2 px-4 rounded-full">{card.label}</a>
            <div className="text-center text-black">
                <span className="text-base font-medium">By: {card.author}</span>
                <div className="text-2xl font-medium mt-2">{card.title}</div>
            </div>
            <div className="flex gap-1 h-20 w-4/5 items-center justify-center my-4">
                {Array.from({ length: waveCount }).map((_, i) => (
                    <div
                        key={i}
                        className="w-1 bg-black rounded-full"
                        style={{
                            height: isPlaying ? `${Math.random() * 80 + 20}%` : '20%',
                            transition: 'height 0.3s ease-in-out',
                            animation: isPlaying ? `bounce 1s infinite ease-in-out ${i * 0.1}s` : 'none',
                        }}
                    ></div>
                ))}
            </div>
            <div className="w-full h-px bg-black my-4"></div>
            <div className="flex items-center justify-center gap-4">
                <button onClick={togglePlay} className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
                    {isPlaying ? (
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H4V14H0V0Z" fill={card.color}/><path d="M8 0H12V14H8V0Z" fill={card.color}/></svg>
                    ) : (
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14V0L12 7L0 14Z" fill={card.color}/></svg>
                    )}
                </button>
            </div>
            {card.audio && <audio ref={audioRef} src={card.audio} loop onEnded={() => setIsPlaying(false)} />}
        </div>
    );
};

const ImageCard: React.FC<{ card: CommunityCardData }> = ({ card }) => (
    <div className="relative w-full pt-[130%] rounded-2xl lg:rounded-3xl overflow-hidden">
        <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <a href={card.labelLink} className="absolute top-4 right-4 text-xs font-medium py-2 px-4 rounded-full" style={{ backgroundColor: card.color, color: 'black' }}>{card.label}</a>
        <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold">{card.title}</h3>
            <p className="text-sm">{card.author}</p>
        </div>
    </div>
);

const CommunityGallery: React.FC = () => {
    return (
        <section className="py-12 md:py-20">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal">Community Gallery</h2>
                <p className="font-sans-text text-base md:text-lg mt-4">
                    Art and experiments created by our growing <a href="#" className="underline">Discord</a> and <a href="#" className="underline">X</a> community members. Tag us to be featured!
                </p>
            </div>
            <div className="mt-8 md:mt-12 pl-4 md:pl-6">
                 <Swiper
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    className="mySwiper !pr-4 md:!pr-6"
                >
                    {communityCards.map((card, index) => (
                        <SwiperSlide key={index} className="!w-[70vw] sm:!w-[40vw] md:!w-[30vw] lg:!w-[25vw]">
                            {card.type === 'image' ? <ImageCard card={card} /> : <MusicPlayerCard card={card} />}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CommunityGallery;