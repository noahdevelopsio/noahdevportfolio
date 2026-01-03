import React from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, XIcon, TwitchIcon, TwitterIcon } from 'lucide-react';
import { TypingEffect } from '@/components/TypingEffect';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-24 border-t border-border bg-surface/30">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-mono text-primary text-sm mb-4">// contact</h3>
            <div className="space-y-4">
              <a 
                href="mailto:Johnnoah620@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">Johnnoah620@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="font-mono text-primary text-sm mb-4">// connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/noahdevelopsio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-105"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/noahenemali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
              </a>
                            <a 
                href="https://X.com/noahdevelops" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-105"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-primary text-sm mb-4">// explore</h3>
            <nav className="space-y-2">
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#excellence" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Excellence</a>
              <a href="#stack" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Tech Stack</a>
            </nav>
          </div>
        </div>
        
        {/* Terminal status */}
        <div className="max-w-xl mx-auto p-4 rounded-lg border border-border bg-background/50 backdrop-blur-sm mb-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="font-mono text-xs text-muted-foreground ml-2">terminal</span>
          </div>
          <TypingEffect 
            text="Ready for new challenges. Let's build something amazing together." 
            className="text-sm text-muted-foreground"
            delay={500}
            speed={40}
          />
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">{'<'}</span>
            {' '}Noah Enemali © {currentYear} • Built with precision{' '}
            <span className="text-primary">{'/>'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
