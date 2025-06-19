import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface NameCrawlProps {
  name: string;
  onDone: () => void;
}

const NameCrawl = forwardRef<{ skip: () => void }, NameCrawlProps>(({ name, onDone }, ref) => {
  const controls = useAnimation();
  let finished = false;

  useImperativeHandle(ref, () => ({
    skip: () => {
      if (!finished) {
        finished = true;
        controls.stop();
        controls.set({ scale: 0.1, y: '-100vh', opacity: 0 });
        onDone();
      }
    }
  }));

  useEffect(() => {
    async function sequence() {
      // shrink to center
      await controls.start({
        scale: 2,
        opacity: 1,
        transition: { duration: 2, ease: 'easeOut' },
      });
      
      // Brief pause at center
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Crawl upward and shrink out
      await controls.start({
        scale: 0.1,
        y: '-100vh',
        opacity: 0,
        transition: { duration: 2.5, ease: 'easeIn' },
      });
      
      if (!finished) {
        finished = true;
        onDone();
      }
    }
    sequence();
  }, [controls, onDone]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4"
      initial={{ scale: 6, opacity: 0, y: 0 }}
      animate={controls}
      style={{ 
        fontFamily: 'StarjediHollow',
        color: '#ffe81f',
        fontSize: 'clamp(2rem, 8vw, 4rem)',
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: '0.1em',
        whiteSpace: 'pre-line',
        lineHeight: 1.1
      }}
    >
    {name}
    </motion.div>
  );
});

export default NameCrawl;