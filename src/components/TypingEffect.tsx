import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ 
  text, 
  className,
  speed = 50,
  delay = 1000 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, text, speed, isTyping]);

  return (
    <span className={cn("font-mono", className)}>
      <span className="text-primary">{'>'}</span>{' '}
      {displayedText}
      <span className={cn(
        "text-primary ml-0.5",
        displayedText.length < text.length && "animate-pulse"
      )}>▋</span>
    </span>
  );
};
