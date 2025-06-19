import React, { useState, useRef } from 'react';
import StarfieldBackground from './StarfieldBackground';
import TypewriterIntro from './TypewriterIntro';
import NameCrawl from './NameCrawl';
import CrawlText from './CrawlText';
import HyperspaceJumpPrompt from './HyperspaceJumpPrompt';

interface StarWarsLoaderProps {
  onFinish: () => void;
  name?: string;
}

const StarWarsLoader: React.FC<StarWarsLoaderProps> = ({ onFinish, name = 'PRATEEK MOHAPATRA' }) => {
  const [phase, setPhase] = useState<'intro' | 'name' | 'crawl' | 'hyperspace' | 'done'>('intro');
  const [triggerHyperspace, setTriggerHyperspace] = useState(false);
  const hyperspaceStarted = useRef(false);
  const crawlRef = useRef<{ skip: () => void } | null>(null);

  // prompt button is clicked, skip crawl start hyperspace
  const handlePromptJump = () => {
    if (!hyperspaceStarted.current) {
      hyperspaceStarted.current = true;
      setTriggerHyperspace(true);
      setPhase('hyperspace');
      // Skip crawl animation if running
      if (crawlRef.current) crawlRef.current.skip();
    }
  };

  // When crawl ends, if hyperspace hasn't started, start it automatically
  const handleCrawlDone = () => {
    if (!hyperspaceStarted.current) {
      hyperspaceStarted.current = true;
      setTriggerHyperspace(true);
      setPhase('hyperspace');
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-[100]">
      <StarfieldBackground
        triggerHyperspace={triggerHyperspace}
        onHyperspaceEnd={() => {
          setPhase('done');
          setTimeout(onFinish, 0);
        }}
      />
      {phase === 'intro' && (
        <TypewriterIntro onDone={() => setPhase('name')} />
      )}
      {phase === 'name' && (
        <NameCrawl name={name} onDone={() => setPhase('crawl')} />
      )}
      {phase === 'crawl' && (
        <>
          <CrawlText ref={crawlRef} onDone={handleCrawlDone} />
          <HyperspaceJumpPrompt onJump={handlePromptJump} />
        </>
      )}
      {phase === 'done' && (
        <div className="fixed inset-0 bg-black z-[101]" style={{ opacity: 0, pointerEvents: 'none' }} />
      )}
    </div>
  );
};

export default StarWarsLoader;