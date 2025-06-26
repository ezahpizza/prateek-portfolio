import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitText from './ui/SplitText';
import ShinyText from './ui/ShinyText';

// TypewriterDialog Component
const TypewriterDialog = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Faster typing

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

// Main Component
const StarWarsFanPrompt = ({ onYes, onNo, onMaybe }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [characterImage, setCharacterImage] = useState('');
  const [dialogText, setDialogText] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleTextComplete = () => {
    setShowButtons(true);
  };

  const handleChoice = (choice) => {
    setSelectedOption(choice);
    setShowButtons(false);

    let image = '';
    let dialog = '';
    let callback = onNo;

    switch (choice) {
      case 'yes':
        image = '/images/revan.webp';
        dialog = 'The force is strong with this one.';
        callback = onYes;
        break;
      case 'no':
        image = '/images/vader.webp';
        dialog = "You are a part of the Rebel Alliance and a traitor! Take them away!";
        callback = onNo;
        break;
      case 'maybe':
        image = '/images/yoda.webp';
        dialog = 'Do or do not. No try there is.';
        callback = onMaybe;
        break;
    }

    setCharacterImage(image);
    setDialogText(dialog);

    // Faster animations
    setTimeout(() => {
      setShowDialog(true);
      setTimeout(() => {
        callback();
      }, dialog.length * 50 + 500); // Reduced timing
    }, 400); // Faster character slide
  };

  return (
    <div className="fixed font-SWprompt inset-0 w-full h-full bg-black z-[150] flex items-center justify-center">
      <div className="flex flex-col items-center max-w-4xl mx-auto px-4">
        {/* Main Question with SplitText */}
        <div className="text-center mb-8">
          <SplitText
            text="Hello There! (General Kenobi) I coded a cool star wars themed intro sequence next, you could stay for it, or go straight to my portfolio that is okay too! :)"
            className="text-blue-300 text-2xl md:text-4xl lg:text-5xl mb-8"
            delay={80}
            duration={0.1}
            splitType={"words"}
            onLetterAnimationComplete={handleTextComplete}
          />
        </div>

        {/* Sleek Buttons with ShinyText */}
        {showButtons && !selectedOption && (
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleChoice('yes')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <ShinyText text="roll the intro" className="text-md md:text-2xl " />
            </motion.button>

            <motion.button
              className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleChoice('no')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <ShinyText text="portfolio please" className="text-md md:text-2xl" />
            </motion.button>

            <motion.button
              className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleChoice('maybe')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <ShinyText text="not a fan but will try the intro :)" className="text-sm md:text-2xl  leading-tight" />
            </motion.button>
          </motion.div>
        )}

        {/* Character and Dialog */}
        {selectedOption && (
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-8 w-full max-w-4xl">
            {/* Character Image */}
            <motion.div
              className="flex-shrink-0"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }} 
            >
              <div
                className="rounded-lg border-2 border-blue-400 bg-black p-4 md:p-6"
                style={{ 
                  width: 'clamp(120px, 20vw, 180px)', 
                  height: 'clamp(120px, 20vw, 180px)' 
                }}
              >
                <img
                  src={characterImage}
                  alt="Character"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Dialog */}
            {showDialog && (
              <motion.div
                className="flex-1 px-4 py-4 md:px-6 md:py-6 rounded-lg border-2 border-blue-400 bg-black text-blue-300 text-lg md:text-2xl lg:text-3xl max-w-md md:max-w-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }} 
              >
                <TypewriterDialog text={dialogText} />
              </motion.div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shine {
          animation: shine var(--animation-duration, 3s) ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default StarWarsFanPrompt;