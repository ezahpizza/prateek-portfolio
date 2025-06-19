import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const introText = 'A long time ago, in a galaxy far, far away....';

const TypewriterIntro: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(introText.slice(0, i + 1));
      i++;
      if (i === introText.length) {
        clearInterval(interval);
        setTimeout(onDone, 1200);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      className="font-SWTitle fixed inset-0 flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        color: '#4bd5ee', 
        fontSize: 'clamp(1.25rem, 4vw, 2.5rem)', 
        textAlign: 'center', 
        letterSpacing: 1 
      }}
    >
      <span>{displayed}</span>
    </motion.div>
  );
};

export default TypewriterIntro;