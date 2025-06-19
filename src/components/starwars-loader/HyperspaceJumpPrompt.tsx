import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HyperspaceJumpPrompt: React.FC<{ onJump: () => void }> = ({ onJump }) => {
  const [blink, setBlink] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => setBlink(b => !b), 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-8 right-12 z-50 flex flex-col items-end">
      <div
      className="px-6 py-4 rounded-lg border-2 border-blue-400 bg-black mb-4 flex items-center justify-center"
      style={{ width: '120px', height: '120px' }}
    >
      <img
        src="/r2d2.svg"
        alt="R2-D2"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
      <motion.div
        className={`px-6 py-4 rounded-lg border-2 border-blue-400 bg-black text-blue-300 font-mono text-lg mb-4 ${blink ? 'opacity-100' : 'opacity-40'}`}
        animate={{ opacity: blink ? 1 : 0.4 }}
        transition={{ duration: 0.2 }}
      >
        Course set to Prateek's portfolio.<br />
        Hyperspace jump calibrations complete.<br />
        <span className="text-yellow-400">Ready for lightspeed...</span>
      </motion.div>
      <motion.button
        className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg font-bold text-xl border-2 border-blue-300 hover:bg-blue-700 transition-all duration-200"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={onJump}
      >
        Jump to Lightspeed
      </motion.button>
    </div>
  );
};

export default HyperspaceJumpPrompt;