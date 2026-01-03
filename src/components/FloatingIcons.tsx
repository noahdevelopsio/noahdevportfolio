import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingIconProps {
  className?: string;
}

// Custom SVG icons for tech stack
const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.12-.21V7.71c0-.09.04-.17.12-.21l7.44-4.29c.08-.04.17-.04.25 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.17-.11.21l-7.44 4.29c-.08.05-.17.05-.25 0l-1.88-1.12c-.07-.04-.16-.05-.24-.02-.64.25-.76.3-1.38.47-.15.04-.37.11.08.32l2.46 1.45c.24.14.5.21.78.21.27 0 .54-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <circle cx="12" cy="12" r="2.05"/>
    <path fill="none" stroke="currentColor" strokeWidth="1" d="M12 6.05c3.87 0 7.45.89 9.47 2.35.61.44 1.03.92 1.03 1.6 0 1.47-2.17 2.88-5.53 3.67M12 6.05c-3.87 0-7.45.89-9.47 2.35C1.92 8.84 1.5 9.32 1.5 10c0 1.47 2.17 2.88 5.53 3.67M12 17.95c3.87 0 7.45-.89 9.47-2.35.61-.44 1.03-.92 1.03-1.6 0-1.47-2.17-2.88-5.53-3.67M12 17.95c-3.87 0-7.45-.89-9.47-2.35C1.92 15.16 1.5 14.68 1.5 14c0-1.47 2.17-2.88 5.53-3.67"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-60 12 12)"/>
  </svg>
);

const PhpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.866 1.55zm5.14-.91c-.092.47-.05.802.124.995.175.194.523.29 1.047.29h.944l.515-2.648h-.838c-.556 0-.97.106-1.242.315-.272.209-.455.558-.55 1.048zm2.128-1.909c.336-.108.765-.163 1.285-.163h1.182l.327-1.682h1.378l-1.231 6.326h-2.65c-.797 0-1.378-.209-1.744-.627-.366-.419-.476-1.003-.33-1.753a2.836 2.836 0 0 1 .866-1.55c.261-.25.581-.439.917-.551zm-4.078 1.909c-.092.47-.05.802.124.995.175.194.523.29 1.047.29h.944l.515-2.648h-.838c-.556 0-.97.106-1.242.315-.272.209-.455.558-.55 1.048zm2.128-1.909c.336-.108.765-.163 1.285-.163h1.182l.327-1.682h1.378l-1.231 6.326h-2.65c-.797 0-1.378-.209-1.744-.627-.366-.419-.476-1.003-.33-1.753a2.836 2.836 0 0 1 .866-1.55c.261-.25.581-.439.917-.551z"/>
  </svg>
);

export const FloatingIcons: React.FC<FloatingIconProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Node.js Icon */}
      <div className="absolute top-[15%] left-[10%] w-16 h-16 text-primary/10 animate-float">
        <NodeIcon />
      </div>
      
      {/* React Icon */}
      <div className="absolute top-[25%] right-[15%] w-20 h-20 text-primary/10 animate-float-delayed" style={{ animationDelay: '1s' }}>
        <ReactIcon />
      </div>
      
      {/* PHP Icon */}
      <div className="absolute bottom-[30%] left-[20%] w-14 h-14 text-primary/10 animate-float" style={{ animationDelay: '2s' }}>
        <PhpIcon />
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-[40%] right-[8%] w-24 h-24 border border-primary/5 rounded-full animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[25%] w-16 h-16 border border-primary/5 rotate-45 animate-float-delayed" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[60%] left-[8%] w-12 h-12 bg-primary/5 rounded-lg animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-[10%] right-[30%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-[10%] left-[10%] w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
    </div>
  );
};
