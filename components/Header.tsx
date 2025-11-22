import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-[100%]">
      <div className="flex flex-col items-center h-[300px] justify-center bg-[#0CE534]">
        <div className="">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5JNzvedWYuRnMIglgWZzZf-1JicMgXNP5le9CWlj8GNb86e9kTzDpD6vW1zfXXZMV5orG919KaDrEmMVt289bR6cGUEpMfyoeuqJswKlMToF2f9WBzl29CkrRYVs3eVc-iDrckvRm__BDn8ULC3NBQOr3C6F9qUKrtqbCsiRR3Y-cOhuZudl0biC2_PEO/s1600/BEST%20GAMES%20(2).png" 
            className="h-full object-cover max-w-full"
            alt="Best Games Logo"
          />
        </div>
        <div className="header-content-wrapper">
          <h1 className="header-t flex justify-center text-white text-5xl mx-[10px] my-0 pb-2 font-black archivo-black-regular">
            Bestg.site
          </h1>
          <p className="header-s m-0 text-[1.2em] text-white font-light">
            All your Favorite games in One Place...
          </p>
        </div>
      </div>
    </header>
  );
};