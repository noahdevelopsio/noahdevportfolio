import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Trophy, Music, BarChart3, Globe2, Shield, CheckCircle, TrendingUp } from 'lucide-react';

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  domain?: string;
  description: string;
  impact?: string;
  icon: React.ReactNode;
  current?: boolean;
  specialEffect?: 'dataInsight' | 'securityCheck';
}

const experiences: TimelineItem[] = [
  {
    period: "2021 – Present",
    title: "Freelance Software Developer",
    organization: "Independent",
    description: "Building scalable backend systems, secure authentication solutions, and RESTful APIs for clients worldwide. Specializing in Laravel and Express.js architectures.",
    icon: <Briefcase className="w-5 h-5" />,
    current: true,
  },
  {
    period: "2024 – 2025",
    title: "President",
    organization: "NACOS MTU",
    description: "Led the largest inter-school tech fair (Project Q), managing budgets and technical strategy for Nigeria's premier student tech organization.",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    period: "2023 – 2025",
    title: "Technical Lead",
    organization: "Block Records",
    description: "Implemented backend systems, digital infrastructure, and automated data workflows for music label operations. Integrated payment processing and content management systems.",
    icon: <Music className="w-5 h-5" />,
  },
  {
    period: "2023 – 2024",
    title: "Data Analyst Intern",
    organization: "Linar School of Media & ICT",
    description: "Automated data pipelines using Python, performed SQL-based extraction for insights, and built interactive Power BI dashboards for stakeholder reporting.",
    icon: <BarChart3 className="w-5 h-5" />,
    specialEffect: 'dataInsight',
  },
  {
    period: "2019 – 2022",
    title: "WordPress Developer",
    organization: "Freelance",
    description: "Engineered responsive WordPress ecosystems with custom themes and SEO optimization, increasing organic visibility and user engagement for diverse clients.",
    icon: <Globe2 className="w-5 h-5" />,
  },
  {
    period: "2018 – 2021",
    title: "IT Support Specialist",
    organization: "Freelance",
    description: "Managed hardware infrastructure ensuring 99.9% uptime, provided cybersecurity guidance, and conducted user training on modern IT tools and safety protocols.",
    icon: <Shield className="w-5 h-5" />,
    specialEffect: 'securityCheck',
  },
];

// Mini bar chart component for Data Analyst hover
const MiniBarChart: React.FC = () => {
  const bars = [40, 65, 85, 55, 75, 90, 60];
  
  return (
    <div className="flex items-end gap-1 h-12 mt-3 p-2 rounded-lg bg-primary/5 border border-primary/20">
      {bars.map((height, idx) => (
        <motion.div
          key={idx}
          className="w-3 bg-gradient-to-t from-primary to-primary/60 rounded-t"
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
        />
      ))}
      <div className="ml-2 flex items-center gap-1 text-xs text-primary font-mono">
        <TrendingUp className="w-3 h-3" />
        +47%
      </div>
    </div>
  );
};

// Security check animation component
const SecurityCheckAnimation: React.FC<{ triggered: boolean }> = ({ triggered }) => {
  return (
    <motion.div 
      className="flex items-center gap-2 mt-3 p-2 rounded-lg bg-primary/5 border border-primary/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: triggered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: triggered ? 1 : 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 10 }}
      >
        <CheckCircle className="w-5 h-5 text-primary" />
      </motion.div>
      <span className="text-xs font-mono text-primary">Security Verified</span>
    </motion.div>
  );
};

interface TimelineCardProps {
  exp: TimelineItem;
  idx: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ exp, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasScrolledPast = useInView(ref, { once: true, margin: "-200px" });

  return (
    <motion.div 
      ref={ref}
      className={`relative flex items-start gap-8 mb-12 ${
        idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
    >
      {/* Timeline dot */}
      <motion.div 
        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center z-10"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="text-primary">{exp.icon}</span>
      </motion.div>
      
      {/* Content card */}
      <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
        <motion.div 
          className="glass-card rounded-xl p-6 card-hover relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -4 }}
        >
          {/* Current badge */}
          {exp.current && (
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-primary/30 bg-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary">Active</span>
            </div>
          )}
          
          {/* Domain badge */}
          {exp.domain && (
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-primary/20 bg-primary/5">
              <span className="font-mono text-xs text-primary/80">{exp.domain}</span>
            </div>
          )}
          
          <div className="font-mono text-sm text-primary mb-2">{exp.period}</div>
          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
          <div className="text-muted-foreground text-sm mb-3">{exp.organization}</div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {exp.description}
          </p>
          
          {/* Impact statement */}
          {exp.impact && (
            <motion.p 
              className="text-primary/80 text-sm leading-relaxed mt-3 pt-3 border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7, height: 'auto' }}
            >
              <span className="font-mono text-xs text-primary">Impact:</span> {exp.impact}
            </motion.p>
          )}
          
          {/* Data Insight animation */}
          {exp.specialEffect === 'dataInsight' && isHovered && (
            <MiniBarChart />
          )}
          
          {/* Security Check animation */}
          {exp.specialEffect === 'securityCheck' && (
            <SecurityCheckAnimation triggered={hasScrolledPast} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-surface/30">
      <div className="container px-4">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-primary text-sm mb-2 block">// experience</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground">
            From leading tech communities to building enterprise solutions.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
          
          {experiences.map((exp, idx) => (
            <TimelineCard key={idx} exp={exp} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
