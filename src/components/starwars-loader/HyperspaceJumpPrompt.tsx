import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HyperspaceJumpPrompt: React.FC<{ onJump: () => void }> = ({ onJump }) => {
  const [blink, setBlink] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => setBlink(b => !b), 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 md:top-8 md:right-12 z-50 flex flex-col items-end max-w-xs md:max-w-none">
      <div
        className="px-3 py-3 md:px-6 md:py-4 rounded-lg border-2 border-blue-400 bg-black mb-4 flex items-center justify-center"
        style={{ 
          width: 'clamp(80px, 15vw, 120px)', 
          height: 'clamp(80px, 15vw, 120px)' 
        }}
      >
        <img
          src="/images/r2d2.svg"
          alt="R2-D2"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
      <motion.div
        className={`px-3 py-3 md:px-6 md:py-4 rounded-lg border-2 border-blue-400 bg-black text-blue-300 font-mono text-xs md:text-lg mb-4 ${blink ? 'opacity-100' : 'opacity-40'} max-w-xs md:max-w-none`}
        animate={{ opacity: blink ? 1 : 0.4 }}
        transition={{ duration: 0.2 }}
        style={{ fontSize: 'clamp(0.75rem, 2.5vw, 1.125rem)' }}
      >
        <div className="font-SWprompt text-center md:text-left">
          Course set to Prateek's portfolio.<br />
          Hyperspace jump calibrations complete.<br />
          <span className="text-yellow-400">Ready for lightspeed...</span>
        </div>
      </motion.div>
      <motion.button
        className="font-SWprompt px-4 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-lg shadow-lg font-bold text-sm md:text-xl border-2 border-blue-300 hover:bg-blue-700 transition-all duration-200"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={onJump}
        style={{ fontSize: 'clamp(0.875rem, 3vw, 1.25rem)' }}
      >
        Jump to Lightspeed
      </motion.button>
    </div>
  );
};

export default HyperspaceJumpPrompt;