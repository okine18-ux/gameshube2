import React, { useEffect } from 'react';
import { Game } from '../types';

interface PopupProps {
  game: Game | null;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ game, onClose }) => {
  useEffect(() => {
    if (game) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [game]);

  if (!game) return null;

  const handleDownload = () => {
    // Check if content locker script is loaded and trigger it
    if ((window as any)._wg && typeof (window as any)._wg === 'function') {
      (window as any)._wg();
      return;
    }
    
    // Fallback to direct link if locker is not present
    window.location.href = game.link;
  };

  return (
    <div className="container mx-auto">
      <div 
        className="bg-black bg-opacity-60 fixed inset-0 z-50 flex items-center justify-center py-20 sm:py-20 animate-slideUp"
        onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="max-w-xl mx-auto rounded-xl pb-4 relative bg-[#2a3042] shadow-2xl h-auto w-[90%] sm:w-[450px] overflow-y-auto max-h-[90vh]">
          <div className="z-50 absolute right-4 top-4 cursor-pointer" onClick={onClose}>
            <span className="material-icons-two-tone cansel_tab text-2xl">cancel</span>
          </div>
          <div className="step-app-content">
            <div className="mb-14 relative w-full h-[180px] sm:h-40">
              <img 
                src={game.coverUrl} 
                className="border-b-2 border-white rounded-t-2xl w-full h-full object-cover" 
                alt="Cover"
              />
              <div className="step-icon-wrapper shadow-2xl absolute bottom-[-48px] left-1/2 transform -translate-x-1/2">
                <img 
                  src={game.imageUrl} 
                  className="rounded-xl table mx-auto max-w-24 z-20 border-4 border-white w-24 h-24" 
                  alt="Icon"
                />
              </div>
            </div>
            <div className="px-6 sm:px-12 step-info-wrapper mt-1 text-center">
              <div className="app-step-pr flex relative items-center justify-center mb-3">
                <div className="app-step-platforms inline-flex relative items-center text-center justify-center space-x-1">
                  <i className="fab fa-android imr text-xl text-gray-400"></i>
                  <i className="fab fa-apple text-xl text-gray-400"></i>
                </div>
                <div className="aspr-sep h-4 w-px bg-gray-200/10 mx-1.5 ml-2.5"></div>
                <div className="app-step-rating inline-flex relative items-center text-center justify-center">
                  <span className="material-icons-two-tone icon-filter text-2xl">star</span>
                  <span className="font-bold text-gray-200">{game.rating}</span>
                </div>
                <div className="aspr-sep-2 mx-2.5"></div>
                <div className="app-step-downloads inline-flex relative items-center text-center justify-center">
                  <span className="material-icons-two-tone filter invert-84 sepia-13 saturate-239 hue-rotate-172 brightness-93 icon-filter contrast-86 text-2xl">
                    cloud_download
                  </span>
                  <span className="pl-[3px] font-bold text-gray-200">{game.downloads || '100K+'}</span>
                </div>
              </div>
              <div className="leading-none text-xs text-yellow-500 mb-1">Bestg.site</div>
              <h4 className="font-bold text-[1.4em] text-gray-100 pb-2">{game.title}</h4>
              <p className="text-gray-200 font-medium text-sm">{game.description}</p>
            </div>
          </div>
          <div className="px-6 sm:px-12 step-proccesing-content border-t border-gray-800/15 mt-5 pt-5">
            <div className="text-center font-bold mx-auto mb-1 text-lg text-yellow-500">Download ready</div>
            <div className="text-center text-base text-gray-300">
              Click the button below in order to start with your app download.
            </div>
            <div className="s-p-c-btn-wrapper mx-auto mt-5">
              <div 
                onClick={handleDownload}
                className="s-p-c-btn animate-pulse-scale w-[88%] p-4 text-center rounded-xl uppercase font-black cursor-pointer max-w-xl mx-auto bg-yellow-500 text-white hover:bg-yellow-400 transition-colors"
                role="button"
                aria-label="Download Now"
              >
                <span>Download Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};