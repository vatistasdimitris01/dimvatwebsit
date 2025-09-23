
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SessionCardData } from '../types';
import { sessionCards } from '../constants';
import PlayIcon from './icons/PlayIcon';

const LiveText: React.FC<{ data: SessionCardData['liveText'] }> = ({ data }) => {
    return (
        <div className="absolute inset-0 text-white uppercase font-bold p-2 md:p-4 flex flex-col justify-between" style={{ color: data.template === 4 ? '#000' : 'white' }}>
            <div className="text-center text-xs md:text-sm">{data.section1}</div>
            <div className={`flex ${data.template === 4 ? 'justify-around' : 'justify-between'} text-xs md:text-sm`}>
                <span>{data.section2}</span>
                {data.template !== 4 && <span>{data.section3}</span>}
                {data.template === 4 && <span>{data.section3}</span>}
                {data.template === 4 && <span>{data.section4}</span>}
                {data.template === 4 && <span>{data.section5}</span>}
            </div>
        </div>
    );
}

const VideoCard: React.FC<{ card: SessionCardData }> = ({ card }) => {
    return (
        <div className="video-card h-full rounded-2xl lg:rounded-3xl p-4 md:p-6 flex flex-col" style={{ backgroundColor: card.color }}>
            <div className="relative pt-[56.25%] w-full rounded-xl lg:rounded-2xl overflow-hidden group">
                <img src={card.poster} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <LiveText data={card.liveText} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="transform scale-75 md:scale-100 transition-transform group-hover:scale-110">
                        <PlayIcon color={card.color} />
                    </button>
                </div>
            </div>
            <div className="mt-4 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-lg md:text-xl font-medium">{card.title}</h3>
                    <p className="font-sans-text text-sm md:text-base mt-2">{card.subtitle}</p>
                </div>
                <a href={card.ctaLink} target="_blank" rel="noopener noreferrer" className="self-start mt-4 gl-buttons inline-block relative overflow-hidden rounded-full py-3 px-6 text-sm font-medium transition-colors duration-300 group-inner border border-black">
                    <span className={`relative z-10 transition-colors duration-300 group-hover:text-white`}>{card.cta}</span>
                    <div className="absolute inset-0 bg-black scale-0 rounded-full transition-transform duration-300 group-hover:scale-105 z-0"></div>
                </a>
            </div>
        </div>
    );
};

const Sessions: React.FC = () => {
    return (
        <section className="py-12 md:py-20 px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl text-center font-normal">
                Lab Sessions: <br />Short films about our creative collaborations
            </h2>
            <div className="max-w-screen-lg mx-auto mt-8 md:mt-12 rounded-2xl md:rounded-3xl overflow-hidden">
                <div className="relative pt-[56.25%] w-full">
                     <video
                        loop
                        autoPlay
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source type="video/webm" src="https://storage.googleapis.com/labs-public/gallery-assets/sessions/sizzle.webm#t=0.001" />
                        <source type="video/mp4" src="https://storage.googleapis.com/labs-public/gallery-assets/sessions/sizzle.mp4#t=0.001" />
                    </video>
                </div>
            </div>
            <div className="mt-8 md:mt-12">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2.2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    className="mySwiper"
                >
                    {sessionCards.map((card, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <VideoCard card={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
             <div className="text-center mt-12">
                <a href="#" className="gl-buttons inline-block relative overflow-hidden rounded-full py-3 px-12 text-base font-medium transition-colors duration-300 group border border-black">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">View all sessions ({sessionCards.length})</span>
                  <div className="absolute inset-0 bg-black scale-0 rounded-full transition-transform duration-300 group-hover:scale-105 z-0"></div>
                </a>
              </div>
        </section>
    );
};

export default Sessions;
