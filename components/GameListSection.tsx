import React, { useState } from 'react';
import { ALL_GAMES } from '../data';
import { Game } from '../types';

interface GameListSectionProps {
  onGameClick: (game: Game) => void;
}

export const GameListSection: React.FC<GameListSectionProps> = ({ onGameClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = ALL_GAMES.filter(game => 
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="listing-s relative min-h-[85vh] pt-[50px] pb-[40px] bg-[#222736]">
      <div className="container mx-auto max-w-[900px]">
        <div className="mx-[30px] flex flex-col sm:flex-row sm:items-center mb-[30px] gap-4 sm:gap-0">
          <h3 className="font-bold uppercase text-[1.4rem] relative pl-[15px] inline-block m-0 before-content text-white">
            All Games
          </h3>
          <div className="max-w-[400px] inline-block sm:ml-auto w-full sm:w-auto">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <span className="material-icons-two-tone text-[#09c115] absolute top-[8px] left-[20px] text-2xl">
                  search
                </span>
                <input 
                  type="text" 
                  className="bg-[#2a3042] text-[#f6f6f6] w-full h-[45px] px-10 pl-[55px] text-base rounded-full border-none outline-none focus:ring-1 focus:ring-[#09c115]" 
                  placeholder="Search for Games..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="px-[10px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mx-auto">
          {filteredGames.map((game) => (
            <div 
              key={game.id} 
              className="container mx-auto card"
              onClick={() => onGameClick(game)}
            >
              <div className="game-item space-x-1 flex flex-row shadow-[0_3px_20px_0_rgba(0,0,0,0.15)] bg-[#2a3042] items-center cursor-pointer rounded-2xl py-[15px] px-[20px]">
                <div className="w-[35%]">
                  <img 
                    src={game.imageUrl} 
                    className="full-image LII max-w-[80%] h-auto rounded-2xl" 
                    alt={game.title}
                  />
                  {/* Hidden cover image used for logic in original, kept here if needed conceptually or for popup logic */}
                  <img src={game.coverUrl} alt="Cover" className="hidden cover" />
                </div>
                <div className="relative w-[calc(100%-100px)]">
                  <div className="flex items-center">
                    <div className="text-[#a6b0cf] leading-none text-[0.7em]">
                      Author: <span className="text-[#0fe02b]">Bestg.site</span>
                    </div>
                    <div className="ml-auto text-[#a6b0cf] flex space-x-1">
                      <i className="fab fa-android align-middle"></i>
                      <i className="fab fa-apple align-middle"></i>
                    </div>
                  </div>
                  <div className="mt-[4px] mb-[7px] flex items-center">
                    <div className="title font-bold leading-none text-[1.3em] sm:text-[1.4em] inline-flex w-[120%] text-gray-100">
                      {game.title}
                    </div>
                    <div className="items-center relative pl-[7px] ml-[10px] inline-flex flex-shrink-0">
                      <span className="h-full w-[1px] bg-[rgba(0,0,0,0.15)] block absolute left-0 top-0"></span>
                      <span className="material-icons-two-tone icon-filter text-xl">star</span>
                      <span className="ml-[2px] font-bold relative text-[#a6b0cf] raiting">{game.rating}</span>
                    </div>
                  </div>
                  <div className="truncate description listing-i-a text-[#a6b0cf] font-normal text-[0.85em]">
                    {game.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};