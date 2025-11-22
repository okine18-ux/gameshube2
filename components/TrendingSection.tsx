import React, { useEffect, useRef } from 'react';
import { TRENDING_GAMES } from '../data';

export const TrendingSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const autoScroll = () => {
      // We calculate card width approx based on the first element if available
      const firstCard = carousel.firstElementChild as HTMLElement;
      if (!firstCard) return;
      
      const cardWidth = firstCard.offsetWidth + 16; // gap-4 = 16px approx, matching original script

      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5) {
         // Reset to start for infinite loop effect (simple implementation)
         carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
         carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    };

    const intervalId = setInterval(autoScroll, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="feature-s bg-[#2a3042] relative pt-[50px] pb-[30px]">
      <div className="container mx-auto max-w-[900px]">
        <div className="mx-[30px]">
          <h3 className="font-bold uppercase text-[1.4rem] relative pl-[15px] inline-block m-0 before-content text-white">
            Trending Games
          </h3>
        </div>
        <div className="mx-[30px] mt-[40px]">
          <div 
            id="carousel" 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x gap-8 sm:gap-11 md:gap-10 lg:gap-8 no-scrollbar scroll-px-4 sm:scroll-px-6 lg:scroll-px-8"
          >
            {TRENDING_GAMES.map((game) => (
              <div 
                key={game.id} 
                className="snap-start p-6 flex-shrink-0 w-[150px] max-h-[230px] bg-[#222736] text-center px-[15px] pt-[15px] pb-[10px] cursor-pointer rounded-2xl"
              >
                <img 
                  src={game.imageUrl} 
                  className="w-[110px] max-w-full rounded-2xl block mx-auto liti img-fluid" 
                  alt={game.title}
                />
                <div className="mt-[10px] font-bold text-base text-gray-100">{game.title}</div>
                <div className="inline-flex relative items-center mt-[2px]">
                  <span className="mb-[2px] h-px w-[15px] bg-[rgba(0,0,0,0.3)] block absolute left-1/4 top-0"></span>
                  <span className="mr-[2px] material-icons-two-tone icon-filter text-[1.5rem]">star</span>
                  <span className="ml-0 font-bold relative ml-[2px] text-[#a6b0cf]">{game.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};