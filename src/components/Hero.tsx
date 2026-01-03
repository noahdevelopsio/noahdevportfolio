import React, { Suspense, lazy } from 'react';
import { Button } from '@/components/ui/button';
import { FloatingIcons } from '@/components/FloatingIcons';
import { TypingEffect } from '@/components/TypingEffect';
import { ArrowDown, Download, ExternalLink, MapPin } from 'lucide-react';

const InteractiveGlobe = lazy(() => 
  import('@/components/InteractiveGlobe').then(mod => ({ default: mod.InteractiveGlobe }))
);

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingIcons />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines opacity-30" />
      
      {/* CRT Scanline 2.0 - moving overlay */}
      <div className="crt-scanline" />
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Terminal label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/5 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm text-primary">Available for hire</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="text-foreground">Noahdevelops:</span>
            <br />
            <span className="text-gradient">Architecting Scalable Backend</span>
            <br />
            <span className="text-foreground">Ecosystems & </span>
            <span className="text-gradient">Decentralized Frontiers</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Specializing in scalable <span className="text-foreground font-medium">Backend</span> (Express.js, Laravel) 
            and sleek <span className="text-foreground font-medium">Frontend</span> (React|Nextjs, TypeScript) architectures
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/noahenemali-resume.pdf" download>
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          
          {/* Terminal Status Bar with Globe */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            {/* Terminal typing effect */}
            <div className="max-w-lg p-4 rounded-lg border border-border bg-surface/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <TypingEffect 
                text="Status: Engineering secure, production-ready code for global impact." 
                className="text-sm text-muted-foreground"
                delay={1500}
              />
            </div>
            
            {/* Interactive Globe with Location */}
            <div className="flex flex-col items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <Suspense fallback={
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-primary/20 bg-surface/50 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                <InteractiveGlobe />
              </Suspense>
              <div className="flex items-center gap-2 text-muted-foreground mt-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <a href="#tech-stack" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono">scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
