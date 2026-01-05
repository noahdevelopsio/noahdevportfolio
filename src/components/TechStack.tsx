import React from 'react';
import { motion } from 'framer-motion';
import { MagneticIcon } from '@/components/MagneticIcon';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone,
  Blocks,
  FileCode,
  Layers,
  Cpu,
  Wallet,
  BarChart3,
  Terminal,
  GitBranch,
  Shield,
  HardDrive,
  FlaskConical,
  Cloud,
  Coins
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface TechCategory {
  title: string;
  description: string;
  items: TechItem[];
  subCategories?: { title: string; items: TechItem[] }[];
  className?: string;
}

const techCategories: TechCategory[] = [
  {
    title: "Backend & ORM",
    description: "Scalable server architectures",
    items: [
      { name: "PHP Laravel", icon: <Server className="w-5 h-5" /> },
      { name: "Express.js", icon: <Cpu className="w-5 h-5" /> },
      { name: "Node.js", icon: <Code2 className="w-5 h-5" /> },
      { name: "Python", icon: <FileCode className="w-5 h-5" /> },
      { name: "Prisma", icon: <Database className="w-5 h-5" /> },
      { name: "RESTful APIs", icon: <Globe className="w-5 h-5" /> },
    ],
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Frontend",
    description: "Modern UI experiences",
    items: [
      { name: "JavaScript", icon: <FileCode className="w-5 h-5" /> },
      { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
      { name: "React", icon: <Layers className="w-5 h-5" /> },
      { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
      { name: "HTML5/CSS3", icon: <Smartphone className="w-5 h-5" /> },
    ],
    className: "md:row-span-2",
  },
  {
    title: "Database & BaaS",
    description: "Data persistence & cloud",
    items: [],
    subCategories: [
      {
        title: "Relational",
        items: [
          { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
          { name: "MySQL", icon: <Database className="w-5 h-5" /> },
          { name: "SQL", icon: <Database className="w-5 h-5" /> },
        ]
      },
      {
        title: "NoSQL & Cloud",
        items: [
          { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
          { name: "Supabase", icon: <Cloud className="w-5 h-5" /> },
          { name: "Firebase", icon: <Cloud className="w-5 h-5" /> },
        ]
      }
    ],
    className: "md:col-span-2",
  },
  {
    title: "Web3 & Blockchain",
    description: "Decentralized applications",
    items: [
      { name: "Solidity", icon: <Blocks className="w-5 h-5" /> },
      { name: "Ethereum", icon: <Coins className="w-5 h-5" /> },
      { name: "Polygon", icon: <Wallet className="w-5 h-5" /> },
      { name: "Ethers.js", icon: <Code2 className="w-5 h-5" /> },
    ],
    className: "",
  },
  {
    title: "Data & Automation",
    description: "Analytics & scripting",
    items: [
      { name: "Python", icon: <FileCode className="w-5 h-5" /> },
      { name: "Power BI", icon: <BarChart3 className="w-5 h-5" /> },
      { name: "SQL", icon: <Database className="w-5 h-5" /> },
    ],
    className: "",
  },
  {
    title: "Testing & Quality",
    description: "Reliability assurance",
    items: [
      { name: "Jest", icon: <FlaskConical className="w-5 h-5" /> },
      { name: "Test Automation", icon: <FlaskConical className="w-5 h-5" /> },
    ],
    className: "",
  },
  {
    title: "Infrastructure & Tools",
    description: "DevOps & security",
    items: [
      { name: "Linux", icon: <Terminal className="w-5 h-5" /> },
      { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
      { name: "Hardhat", icon: <HardDrive className="w-5 h-5" /> },
      { name: "Cybersecurity", icon: <Shield className="w-5 h-5" /> },
    ],
    className: "md:col-span-2",
  },
];

const chipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

export const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 md:py-32">
      <div className="container px-4">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-primary text-sm mb-2 block">// tech_stack</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit for building modern, scalable applications across the full stack.
          </p>
        </div>
        
        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {techCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              className={`glass-card rounded-xl p-6 card-hover ${category.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {category.items[0]?.icon || category.subCategories?.[0]?.items[0]?.icon}
                </div>
              </div>
              
              {/* Regular items */}
              {category.items.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <MagneticIcon key={item.name} strength={0.2}>
                      <motion.div 
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-surface/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                        custom={itemIdx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={chipVariants}
                      >
                        <span className="text-primary">{item.icon}</span>
                        <span className="text-sm font-medium">{item.name}</span>
                      </motion.div>
                    </MagneticIcon>
                  ))}
                </div>
              )}
              
              {/* Sub-categories */}
              {category.subCategories && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.subCategories.map((subCat, subIdx) => (
                    <div key={subCat.title}>
                      <h4 className="text-xs font-mono text-primary/70 mb-2 uppercase tracking-wider">
                        {subCat.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {subCat.items.map((item, itemIdx) => (
                          <MagneticIcon key={item.name} strength={0.2}>
                            <motion.div 
                              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-surface/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                              custom={subIdx * 3 + itemIdx}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={chipVariants}
                            >
                              <span className="text-primary">{item.icon}</span>
                              <span className="text-sm font-medium">{item.name}</span>
                            </motion.div>
                          </MagneticIcon>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};