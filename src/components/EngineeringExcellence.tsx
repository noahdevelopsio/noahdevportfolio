import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users } from 'lucide-react';

interface TrustPillar {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

const pillars: TrustPillar[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Architecture & Security",
    description: "Building fortress-level security into every system from the ground up.",
    highlights: [
      "Role-Based Access Control (RBAC)",
      "Secure Authentication Systems",
      "DApp Security & Smart Contract Auditing",
      "End-to-End Encryption Protocols"
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Optimization",
    description: "Obsessed with milliseconds. Every optimization compounds into better UX.",
    highlights: [
      "Deep Performance Analysis",
      "Database Query Optimization",
      "CDN & Caching Strategies",
      "Load Time Reduction Expertise"
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Technical Leadership",
    description: "Translating complex requirements into maintainable, scalable solutions.",
    highlights: [
      "Cross-Functional Team Leadership",
      "Agile Development Practices",
      "Code Review & Mentorship",
      "Technical Documentation"
    ]
  }
];

export const EngineeringExcellence: React.FC = () => {
  return (
    <section id="excellence" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-primary text-sm mb-2 block">// engineering_excellence</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Trust Pillars
          </h2>
          <p className="text-muted-foreground">
            Core competencies that define my approach to software engineering.
          </p>
        </div>
        
        {/* Trust pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full p-6 md:p-8 rounded-xl bg-surface/50 border border-border transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.1)]">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {pillar.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  
                  {/* Highlights */}
                  <ul className="space-y-2">
                    {pillar.highlights.map((highlight, hIdx) => (
                      <motion.li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + hIdx * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
