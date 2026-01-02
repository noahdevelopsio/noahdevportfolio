import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import { Timeline } from '@/components/Timeline';
import { EngineeringExcellence } from '@/components/EngineeringExcellence';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <TechStack />
        <Timeline />
        <EngineeringExcellence />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
