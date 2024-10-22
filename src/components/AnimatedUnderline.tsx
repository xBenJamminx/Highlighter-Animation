import { useEffect, useRef } from 'react';
import { Highlighter } from 'lucide-react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

interface AnimatedHighlightProps {
  text: string;
  color?: string;
  fontSize?: string;
  className?: string;
}

export const AnimatedUnderline = ({
  text,
  color = '#6ca0dc',
  fontSize = '30px',
  className = '',
}: AnimatedHighlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !highlightRef.current || !highlighterRef.current) return;

    const highlight = highlightRef.current;
    const highlighter = highlighterRef.current;

    // Set initial states
    gsap.set(highlight, {
      scaleX: 0,
      transformOrigin: 'left',
    });

    gsap.set(highlighter, {
      opacity: 0,
      scale: 0,
      rotation: -30,
    });

    // Create timeline
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    tl.to(highlighter, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
    })
      .to(highlight, {
        scaleX: 1,
        duration: 1.5,
      })
      .to(
        highlighter,
        {
          x: containerRef.current.offsetWidth,
          duration: 1.5,
        },
        '<'
      )
      .to(
        highlighter,
        {
          opacity: 0,
          scale: 0,
          duration: 0.3,
        },
        '>-0.3'
      );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{ fontSize }}
    >
      <div className="relative">
        <div 
          ref={highlightRef}
          className="absolute inset-0 -skew-y-2"
          style={{
            backgroundColor: color,
            opacity: 0.3,
            height: '100%',
            width: '100%',
          }}
        />
        <span className="relative">{text}</span>
      </div>
      <div
        ref={highlighterRef}
        className="absolute left-0 top-1/2 pointer-events-none"
        style={{ color }}
      >
        <Highlighter
          size={32}
          className="transform -translate-y-1/2"
        />
      </div>
    </div>
  );
};