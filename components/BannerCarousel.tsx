
import React, { useState, useRef, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { BannerCardData } from '../types';
import { bannerCards } from '../constants';

const DESKTOP_PREVIEW_WIDTH = 1280;
const DESKTOP_PREVIEW_HEIGHT = 720;

const BannerCard: React.FC<{ card: BannerCardData }> = ({ card }) => {
    const previewWrapperRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        const updateScale = () => {
            if (previewWrapperRef.current) {
                const containerWidth = previewWrapperRef.current.clientWidth;
                if (containerWidth > 0) {
                    setScale(containerWidth / DESKTOP_PREVIEW_WIDTH);
                }
            }
        };

        const element = previewWrapperRef.current;
        if (!element) return;
        
        const observer = new ResizeObserver(updateScale);
        observer.observe(element);
        
        updateScale();

        return () => {
            observer.unobserve(element);
        };
    }, []);

    return (
        <div className="flex flex-col h-full rounded-3xl overflow-hidden text-black p-4" style={{ backgroundColor: card.color }}>
            {/* Top content part */}
            <div className="text-center px-4 pt-8 pb-4 sm:px-6 sm:pt-10 sm:pb-6 flex-grow flex flex-col items-center justify-center">
                {card.optionalHeader && <p className="font-bold text-sm tracking-[0.2em] uppercase">{card.optionalHeader}</p>}
                <h3 className="text-4xl md:text-5xl font-bold mt-2">{card.title}</h3>
                <p className="font-sans-text text-base md:text-lg mt-4 max-w-xl mx-auto">{card.body}</p>
                <a href={card.ctaLink} target="_blank" rel="noopener noreferrer" className="mt-6 border border-black rounded-full py-3 px-8 text-sm font-medium hover:bg-black/10 active:bg-black/20 transition-colors duration-300">
                    {card.cta}
                </a>
            </div>
            
            {/* Bottom iframe part */}
            <div className="bg-gray-100 rounded-2xl mt-auto p-4 sm:p-6 flex justify-center items-center flex-grow-[3] min-h-0">
                 <div className="w-full">
                    <div ref={previewWrapperRef} className="relative w-full aspect-video rounded-lg shadow-xl overflow-hidden">
                        <iframe
                            className="absolute top-0 left-0 border-0"
                            style={{
                                width: `${DESKTOP_PREVIEW_WIDTH}px`,
                                height: `${DESKTOP_PREVIEW_HEIGHT}px`,
                                transform: `scale(${scale})`,
                                transformOrigin: '0 0',
                            }}
                            src={card.ctaLink}
                            title={`${card.title} preview`}
                            loading="lazy"
                            scrolling="no"
                        ></iframe>
                        {/* Overlay to prevent interaction */}
                        <div className="absolute inset-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const BannerCarousel: React.FC = () => {
    return (
        <section className="banner-cards py-8 md:py-12 px-4 md:px-6">
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                className="mySwiper"
                style={{ paddingBottom: '40px' }} // Add padding for pagination
            >
                {bannerCards.map((card, index) => (
                    <SwiperSlide key={index} className="h-auto">
                        <div className="h-auto min-h-[660px] max-w-4xl mx-auto pb-4">
                           <BannerCard card={card} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BannerCarousel;