import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { CA_ADDRESS } from '../constants';

const ContractAddress: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CA_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-6 bg-white border-4 border-jungle-green rounded-3xl shadow-[8px_8px_0px_0px_rgba(22,163,74,1)] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
      <h3 className="text-jungle-dark font-meme text-3xl mb-4 text-center uppercase tracking-wider">
        Official Contract Address
      </h3>
      <div 
        onClick={handleCopy}
        className="flex flex-col md:flex-row items-center justify-between bg-jungle-light border-2 border-jungle-green border-dashed p-4 rounded-xl cursor-pointer hover:bg-white transition-colors group relative"
      >
        <div className="font-mono text-sm md:text-xl text-jungle-dark font-bold break-all text-center md:text-left selection:bg-banana">
          {CA_ADDRESS}
        </div>
        <div className="mt-4 md:mt-0 md:ml-4 flex items-center gap-2 bg-jungle-dark text-white px-6 py-2 rounded-lg font-bold uppercase text-sm group-hover:bg-banana group-hover:text-black border-2 border-transparent group-hover:border-black transition-all">
          {copied ? <Check size={20} /> : <Copy size={20} />}
          {copied ? "COPIED!" : "COPY"}
        </div>
        
        {/* Tooltip hint */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Click to copy CA
        </div>
      </div>
    </div>
  );
};

export default ContractAddress;