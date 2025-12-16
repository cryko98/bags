import React from 'react';
import { ExternalLink, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';
import NavBar from './components/NavBar';
import ContractAddress from './components/ContractAddress';
import { IMAGES, TWITTER_LINK, BUY_LINK } from './constants';

// Simple X.com Logo Component
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-jungle-green selection:text-white bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]">
      <NavBar />

      {/* BANNER IMAGE - Edge to Edge with Frame */}
      <div className="w-full mt-24 border-y-8 border-black bg-black shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
        <img 
          src="https://pbs.twimg.com/media/G8U-68XXYAAQ6Xv?format=jpg&name=large" 
          alt="Sendor Banner" 
          className="w-full h-auto block"
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        
        {/* Decorative Vines/Leaves (CSS shapes) */}
        <div className="absolute top-20 left-0 w-32 h-32 bg-jungle-green opacity-20 rounded-br-full blur-xl"></div>
        <div className="absolute top-40 right-0 w-48 h-48 bg-banana opacity-20 rounded-bl-full blur-xl"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          
          <div className="inline-block animate-bounce-slow mb-6">
             <span className="bg-white text-jungle-green font-black px-6 py-2 rounded-full uppercase tracking-widest text-sm border-4 border-jungle-green shadow-lg flex items-center gap-2">
               🚀 LAUNCHING ON BAGS.FM 🚀
             </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-meme text-jungle-green drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] leading-none mb-6 transform -rotate-1">
            BIG ASS GORILLA <br />
            <span className="text-banana text-stroke-black">SENDOR</span>
          </h1>

          <p className="text-2xl md:text-3xl text-jungle-dark max-w-3xl mx-auto mb-10 font-bold leading-relaxed">
            The first verified Alpha Ape on Bags.fm. <br/>
            Real identity. Real gains. Real huge gorilla.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12 items-center">
            <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer" className="bg-black text-white p-5 rounded-xl hover:bg-banana hover:text-black border-2 border-black transition-all transform hover:scale-110 hover:-rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
              <XLogo className="w-8 h-8" />
            </a>
            <a href={BUY_LINK} target="_blank" rel="noopener noreferrer" className="bg-jungle-green text-white px-8 py-4 rounded-xl hover:bg-banana hover:text-black border-2 border-black transition-all transform hover:scale-105 hover:rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] font-meme text-2xl flex items-center gap-2 animate-pulse">
               BUY ON BAGS.FM <ExternalLink size={24} />
            </a>
          </div>

          <ContractAddress />

          <div className="relative mt-16 w-full max-w-2xl mx-auto group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-jungle-green rounded-[3rem] blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            
            <img 
              src={IMAGES.HERO_GORILLA} 
              alt="Sendor the Huge Gorilla" 
              className="relative rounded-[2rem] border-8 border-white shadow-2xl transform transition-transform group-hover:scale-[1.02] w-full object-cover h-[500px]"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-banana text-black px-6 py-4 rounded-xl font-meme text-3xl border-4 border-black transform rotate-6 shadow-xl">
              VERIFIED APE
            </div>
            <div className="absolute -top-6 -left-6 bg-white text-jungle-dark px-6 py-4 rounded-xl font-meme text-2xl border-4 border-jungle-dark transform -rotate-6 shadow-xl">
              CREATOR POWER
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-jungle-green py-6 overflow-hidden border-y-4 border-black transform -rotate-1 scale-105 z-20 relative shadow-xl">
        <div className="whitespace-nowrap animate-[scroll_20s_linear_infinite] font-meme text-5xl text-white uppercase tracking-wider">
          🦍 LAUNCHED ON BAGS.FM 🦍 VERIFIED CREATOR 🦍 SUPPORT THE JUNGLE 🦍 APES TOGETHER STRONG 🦍 BUY $BAGS 🦍 SENDOR SENDS 🦍
          🦍 LAUNCHED ON BAGS.FM 🦍 VERIFIED CREATOR 🦍 SUPPORT THE JUNGLE 🦍 APES TOGETHER STRONG 🦍 BUY $BAGS 🦍 SENDOR SENDS 🦍
        </div>
      </div>

      {/* WHY BAGS SECTION */}
      <section id="how-to-buy" className="py-24 bg-jungle-light border-b-4 border-jungle-green">
         <div className="container mx-auto px-4">
            <h2 className="text-6xl md:text-8xl font-meme text-center text-jungle-dark mb-16">
              THE <span className="text-banana text-stroke-green">BAGS.FM</span> WAY
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-none transition-all">
                <div className="bg-jungle-green w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 border-black">
                  <ShieldCheck size={32} className="text-white" />
                </div>
                <h3 className="font-meme text-3xl mb-4 text-jungle-dark">Verified Ape</h3>
                <p className="text-lg font-bold text-gray-600">
                  Sendor isn't a ghost. On Bags.fm, ownership is verified via social media. No anonymous rug-pullers, just one Big Ass Gorilla.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-none transition-all">
                <div className="bg-banana w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 border-black">
                  <Zap size={32} className="text-black" />
                </div>
                <h3 className="font-meme text-3xl mb-4 text-jungle-dark">Creator Economy</h3>
                <p className="text-lg font-bold text-gray-600">
                  We are building a real jungle economy. Launching on Bags lets us earn from our ideas and grow the community with real incentives.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-none transition-all">
                <div className="bg-neon-green w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 border-black">
                  <Globe size={32} className="text-black" />
                </div>
                <h3 className="font-meme text-3xl mb-4 text-jungle-dark">Community First</h3>
                <p className="text-lg font-bold text-gray-600">
                  1% of trading volume goes back to the creator ecosystem. That means more bananas for marketing, memes, and Sendor's protein shakes.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
               <a href={BUY_LINK} className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-meme text-3xl hover:bg-banana hover:text-black border-4 border-transparent hover:border-black transition-all">
                 START TRADING ON BAGS <ArrowRight />
               </a>
            </div>
         </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
               <div className="absolute inset-0 bg-black rounded-3xl transform translate-x-4 translate-y-4"></div>
               <div className="relative bg-jungle-light p-4 rounded-3xl border-4 border-black transform rotate-1 hover:rotate-0 transition-all">
                 <img src={IMAGES.ABOUT_GORILLA} alt="Thinking Gorilla" className="rounded-2xl border-2 border-jungle-green w-full h-[500px] object-cover" />
                 <p className="font-meme text-center text-2xl mt-4 text-jungle-dark">"I chose Bags.fm because I like heavy bags."</p>
               </div>
            </div>
            
            <div className="md:w-1/2 text-left space-y-8">
              <h2 className="text-6xl md:text-8xl font-meme text-jungle-dark mb-4">
                MEET <span className="text-jungle-green underline decoration-banana decoration-wavy">SENDOR</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-700 font-medium">
                <p>
                  Sendor realized that standard DEX launches are boring. He wanted a platform that respects the hustle. 
                  Bags.fm lets anyone fund their ideas with coins that anyone can trade.
                </p>
                <p>
                  So Sendor smashed his keyboard and launched $BAGS. Now the whole jungle has a stake in his success.
                  <strong className="text-jungle-green text-2xl block mt-4">Verified. Sustainable. Massive.</strong>
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-jungle-white p-6 rounded-2xl text-center border-4 border-jungle-green shadow-[6px_6px_0px_0px_rgba(22,163,74,1)]">
                  <h3 className="text-5xl font-meme text-jungle-dark">1B</h3>
                  <p className="text-lg font-bold text-gray-500 uppercase">Supply</p>
                </div>
                <div className="bg-banana p-6 rounded-2xl text-center border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-5xl font-meme text-black">1%</h3>
                  <p className="text-lg font-bold text-gray-800 uppercase">Creator Fee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / MEMES */}
      <section id="gallery" className="py-24 bg-jungle-light border-t-4 border-jungle-green">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <span className="text-6xl animate-bounce">📸</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-meme text-jungle-dark mb-16 drop-shadow-sm">
            CAUGHT IN <span className="text-white text-stroke-green">4K</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="group relative">
               <div className="absolute inset-0 bg-black transform translate-x-3 translate-y-3 rounded-2xl transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
               <div className="relative bg-white p-4 rounded-2xl border-4 border-black h-full flex flex-col">
                 <div className="overflow-hidden rounded-xl border-2 border-gray-200 mb-4 h-64">
                    <img src={IMAGES.GALLERY_1} alt="Meme 1" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                 </div>
                 <h4 className="font-meme text-3xl text-jungle-green mb-2">Wait for pump</h4>
                 <p className="text-gray-600 font-bold">"Sendor meditating before the green candle appears."</p>
               </div>
            </div>

            {/* Card 2 */}
            <div className="group relative transform md:-translate-y-12">
               <div className="absolute inset-0 bg-jungle-green transform translate-x-3 translate-y-3 rounded-2xl transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
               <div className="relative bg-white p-4 rounded-2xl border-4 border-black h-full flex flex-col">
                 <div className="overflow-hidden rounded-xl border-2 border-gray-200 mb-4 h-64">
                    <img src={IMAGES.GALLERY_2} alt="Meme 2" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                 </div>
                 <h4 className="font-meme text-3xl text-jungle-green mb-2">Verified Alpha</h4>
                 <p className="text-gray-600 font-bold">"Checking his social verification status on Bags.fm"</p>
               </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
               <div className="absolute inset-0 bg-banana transform translate-x-3 translate-y-3 rounded-2xl transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
               <div className="relative bg-white p-4 rounded-2xl border-4 border-black h-full flex flex-col">
                 <div className="overflow-hidden rounded-xl border-2 border-gray-200 mb-4 h-64">
                    <img src={IMAGES.GALLERY_3} alt="Meme 3" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                 </div>
                 <h4 className="font-meme text-3xl text-jungle-green mb-2">Bag Secured</h4>
                 <p className="text-gray-600 font-bold">"When you earn fees just for having a good idea."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-jungle-dark py-16 border-t-8 border-banana">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-meme text-white mb-8 tracking-widest">
            JOIN THE <span className="text-banana">TROOP</span>
          </h2>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href={TWITTER_LINK} className="bg-white text-black p-4 rounded-full hover:bg-banana transition-all transform hover:scale-125 hover:rotate-12">
              <XLogo className="w-8 h-8" />
            </a>
            <a href={BUY_LINK} className="bg-white text-black p-4 rounded-full hover:bg-banana transition-all transform hover:scale-125 hover:-rotate-12 font-bold flex items-center">
              <Zap className="w-8 h-8" />
            </a>
          </div>
          
          <div className="max-w-2xl mx-auto bg-black/30 p-6 rounded-xl border border-jungle-green/30 backdrop-blur-sm">
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong>DISCLAIMER:</strong> $BAGS is launched on Bags.fm. Sendor is a gorilla on the internet. 
              Gorillas eat paper hands. Do not risk money you need for actual bananas. 
              <br/>
              Crypto is a jungle, stay safe.
            </p>
          </div>
          
          <p className="text-jungle-green text-sm mt-8 font-bold tracking-widest uppercase">
            © 2025 BIG ASS GORILLA SENDOR
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;