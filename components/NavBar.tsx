import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'How to Buy', href: '#how-to-buy' },
    { name: 'Meme Gallery', href: '#gallery' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b-4 border-jungle-green shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 transform -rotate-2 hover:rotate-0 transition-transform">
            <span className="font-meme text-5xl text-jungle-green text-shadow-hard tracking-wider cursor-pointer">
              $BAGS
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-jungle-dark hover:text-jungle-green hover:underline decoration-wavy underline-offset-4 px-3 py-2 rounded-md text-2xl font-meme uppercase transition-all"
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-jungle-green text-white px-8 py-3 rounded-xl font-meme text-xl hover:bg-black hover:scale-105 transition-all transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
                BUY $BAGS
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-jungle-green hover:text-black p-2"
            >
              {isOpen ? <X size={40} /> : <Menu size={40} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-4 border-jungle-green">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-jungle-dark hover:bg-jungle-light block px-3 py-2 rounded-md text-3xl font-meme text-center"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;