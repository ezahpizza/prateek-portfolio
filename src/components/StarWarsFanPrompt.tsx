import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface StarWarsFanPromptProps {
  onYes: () => void;
  onNo: () => void;
  onMaybe: () => void;
}

const StarWarsFanPrompt: React.FC<StarWarsFanPromptProps> = ({ onYes, onNo, onMaybe }) => {
  const [typewriterText, setTypewriterText] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | 'maybe' | null>(null);
  const [characterImage, setCharacterImage] = useState('');
  const [dialogText, setDialogText] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const fullText = 'Are you a Star Wars fan?';

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowButtons(true), 500);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const handleChoice = (choice: 'yes' | 'no' | 'maybe') => {
    setSelectedOption(choice);
    setShowButtons(false);

    let image = '';
    let dialog = '';
    let callback = onNo;

    switch (choice) {
      case 'yes':
        image = '/images/vader.webp';
        dialog = 'The force is strong with this one.';
        callback = onYes;
        break;
      case 'no':
        image = '/images/revan.webp';
        dialog = "I've got a bad feeling about this.";
        callback = onNo;
        break;
      case 'maybe':
        image = '/images/yoda.webp';
        dialog = 'Go or stay. No try there is.';
        callback = onMaybe;
        break;
    }

    setCharacterImage(image);
    setDialogText(dialog);

    // Character slides in, then dialog appears
    setTimeout(() => {
      setShowDialog(true);
      // After dialog completes, trigger callback
      setTimeout(() => {
        callback();
      }, dialog.length * 80 + 1000);
    }, 800);
  };

  return (
    <div className="fixed font-SWprompt inset-0 w-full h-full bg-black z-[150] flex items-center justify-center">
      <div className="flex flex-col items-center max-w-4xl mx-auto px-4">
        {/* Main Question */}
        <div className="text-center mb-8">
          <div 
            className="text-blue-300 text-2xl md:text-4xl lg:text-5xl mb-8"
            style={{ minHeight: '1.5em' }}
          >
            {typewriterText}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        {/* Buttons */}
        {showButtons && !selectedOption && (
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-blue-600 text-white rounded-lg shadow-lg font-bold text-md md:text-2xl border-2 border-blue-300 hover:bg-blue-700 transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleChoice('yes')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              Yes
            </motion.button>

            <motion.button
              className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-red-600 text-white rounded-lg shadow-lg font-bold text-md md:text-2xl border-2 border-red-300 hover:bg-red-700 transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleChoice('no')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              No
            </motion.button>

            <motion.button
              className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-green-600 text-white rounded-lg shadow-lg font-bold text-sm md:text-2xl border-2 border-green-300 hover:bg-green-700 transition-all duration-200 leading-tight"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleChoice('maybe')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              No, but I'll try staying for a cool animation
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
              transition={{ duration: 0.6, ease: "easeOut" }}
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
                transition={{ duration: 0.5 }}
              >
                <TypewriterDialog text={dialogText} />
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const TypewriterDialog: React.FC<{ text: string }> = ({ text }) => {
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
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default StarWarsFanPrompt;