import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const crawlText = [
  'Episode I',
  'The Program Menace',
  'From Agratooine, a young padawan emerged. With code in hand and curiosity in heart, he journeyed deep into the realms of Java, Python, and C++. A threat loomed—not from the Sith, but from unoptimized code and messy architectures.',

  'Episode II',
  'Attack of the Stack',
  'Harnessing the Force of React, FastAPI, and MongoDB, he launched full-stack attacks, building LMS platforms and travel planners. With Tailwind cloaks and Docker fleets, the stack struck back with elegance and power.',

  'Episode III',
  'Revenge of the Research',
  'Fueled by a desire to bring balance to agriculture and AI, he built models predicting yields and water needs. Armed with Fuzzy Extropy and Transformer attention, he fought entropy itself—and published in Scopus-guarded scrolls.',

  'Episode IV',
  'A New Deploy',
  "Learned he has, from many mentors. Deep learning, fuzzy logic, web design—all mastered, he has. Into real world, deploy his powers he did. Samsung, NIT, and freelance—each a battleground. Strong, his CI/CD is. Real-time syncing, cloud scaling—flows like the Force through him. Awaiting, new missions are.",

  'Episode V',
  'The Intern Strikes Back',
  'Through internships at Samsung and LadderMedia, the young engineer struck back against mediocrity. Data pipelines, model optimization, and scalable architecture—wielded with precision, his tools of the trade.',

  'Episode VI',
  'Return of the Creator',
  'With mindEase and nexafit, he returned to serve the people—calories tracked, mental health supported. No longer just an engineer, but a creator of experiences, blending design and AI into symphonic harmony. The portfolio is his ship. You are now aboard.',

  'Explore, you must. Projects await.',
  'Welcome to the world of Prateek Mohapatra.',
  'May the source code be with you.',
];

interface CrawlTextProps {
  onDone: () => void;
}

const CrawlText = forwardRef<{ skip: () => void }, CrawlTextProps>(({ onDone }, ref) => {
  const controls = useAnimation();
  let finished = false;

  useImperativeHandle(ref, () => ({
    skip: () => {
      if (!finished) {
        finished = true;
        controls.stop();
        controls.set({ y: '-200%', opacity: 0 });
        onDone();
      }
    }
  }));

  useEffect(() => {
    async function sequence() {
      await controls.start({
        y: '-300%',
        opacity: 1,
        transition: { duration: 90, ease: 'linear' },
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
      className="font-starwarsTitle font-bold fixed left-1/2 bottom-0 pointer-events-none px-4"
      initial={{ y: '100%', opacity: 1 }}
      animate={controls}
      style={{
        width: 'min(20em, 90vw)',
        height: '50em',
        marginLeft: 'min(-10em, -45vw)',
        overflow: 'hidden',
        fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
        textAlign: 'justify',
        color: '#ffe81f',
        transform: 'perspective(350px) rotateX(25deg)',
        transformOrigin: '50% 100%',
        lineHeight: '1.4',
        zIndex: 50,
      }}
    >
      <div className="relative">
        {crawlText.map((line, i) => (
          <p 
            key={i} 
            className={`${i < 2 ? 'text-center' : 'text-justify'} mb-6`}
            style={{
              fontSize: i === 0 ? 'clamp(1.2rem, 4vw, 1.8rem)' : 
                       i === 1 ? 'clamp(1.4rem, 4.5vw, 2.2rem)' : 
                       'clamp(1.3rem, 4vw, 2rem)',
              fontWeight: i < 2 ? 700 : 600,
              textTransform: i === 1 ? 'uppercase' : 'none',
              letterSpacing: i < 2 ? '0.1em' : '0.05em',
              margin: i === 2 ? '3rem 0' : '1.5rem 0'
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
});

export default CrawlText;