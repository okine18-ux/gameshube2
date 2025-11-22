import React, { useState } from 'react';
import { Header } from './components/Header';
import { TrendingSection } from './components/TrendingSection';
import { GameListSection } from './components/GameListSection';
import { Footer } from './components/Footer';
import { Popup } from './components/Popup';
import { Game } from './types';

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
  };

  const handleClosePopup = () => {
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-[#222736] text-gray-100 font-sans">
      <Header />
      <TrendingSection />
      <GameListSection onGameClick={handleGameClick} />
      <Footer />
      <Popup game={selectedGame} onClose={handleClosePopup} />
    </div>
  );
};

export default App;