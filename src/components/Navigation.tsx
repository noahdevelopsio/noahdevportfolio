import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}>
        <div className="container px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-mono text-lg font-bold tracking-tight">
                <span className="text-primary">N</span>oah<span className="text-primary">.</span>
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>
                  {' '}{link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>
            
            {/* Contact button (desktop) */}
            <div className="hidden md:block">
              <Button variant="terminal" asChild>
                <a href="mailto:Johnnoah620@gmail.com">Contact</a>
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-foreground hover:border-primary/50 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 md:hidden transition-all duration-300",
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      )}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Terminal-style menu */}
        <div className="absolute inset-x-4 top-20 bottom-4 flex flex-col">
          <div className="glass-card rounded-xl p-6 flex-1 overflow-auto">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="font-mono text-xs text-muted-foreground ml-2">navigation.sh</span>
            </div>
            
            {/* Menu items */}
            <nav className="space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-mono text-lg opacity-0 animate-fade-in-left"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="text-primary">$</span>{' '}
                  <span className="text-muted-foreground">cd</span>{' '}
                  <span className="text-foreground hover:text-primary transition-colors">
                    {link.href}
                  </span>
                </a>
              ))}
              
              <div className="pt-4 border-t border-border opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <a
                  href="mailto:Johnnoah620@gmail.com"
                  onClick={() => setIsOpen(false)}
                  className="block font-mono text-lg"
                >
                  <span className="text-primary">$</span>{' '}
                  <span className="text-muted-foreground">mail</span>{' '}
                  <span className="text-primary hover:underline">
                    Johnnoah620@gmail.com
                  </span>
                </a>
              </div>
            </nav>
            
            {/* Status line */}
            <div className="mt-auto pt-6">
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">{'>'}</span> Status: Available for hire
                <span className="text-primary animate-pulse">▋</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
