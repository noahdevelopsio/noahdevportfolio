import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Blocks, ShoppingCart, Briefcase, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  color: string;
}

const projects: Project[] = [
  {
    title: "Quirlo",
    description: "Hybrid blockchain social platform leveraging Next.js, Polygon network integration, AI-powered content moderation, and innovative device-based mining logic for decentralized communities.",
    tags: ["Next.js", "Polygon", "AI Moderation", "Device Mining", "Web3", "TypeScript"],
    icon: <Blocks className="w-6 h-6" />,
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Carmony",
    description: "Sophisticated car marketplace featuring a secure Escrow Wallet System for trustless peer-to-peer transactions, built with Next.js and TypeScript for optimal performance and user safety.",
    tags: ["Next.js", "TypeScript", "Escrow Wallet System", "Payment Integration", "Web3"],
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Vendora",
    description: "Multi-role marketplace backend featuring Admin/Vendor/User authentication layers and an Automated Vendor Approval Flow, built using Laravel's powerful MVC architecture for enterprise scalability.",
    tags: ["Laravel", "PHP", "REST API", "Multi-role Auth", "Vendor Approval", "RBAC"],
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Skillsoft Jobs",
    description: "Full-stack job platform with clean MVC architecture and role-based access control (RBAC), featuring advanced search, application tracking, and employer dashboard capabilities.",
    tags: ["Full Stack", "MVC", "RBAC", "Job Matching", "Dashboard"],
    icon: <Users className="w-6 h-6" />,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Smart Contract Utilities",
    description: "Internal tooling suite for Web3 development featuring token transfer utilities, contract deployment scripts, and automated testing frameworks for Solidity smart contracts.",
    tags: ["Solidity", "Hardhat", "Ethers.js", "Token Transfers", "Deployment Scripts"],
    icon: <Code className="w-6 h-6" />,
    color: "from-yellow-500/20 to-amber-500/20",
  },
];

export const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-primary text-sm mb-2 block">// projects</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground">
            A selection of projects showcasing full-stack development, Web3 integration, and scalable architecture design.
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8 }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`glass-card rounded-xl overflow-hidden transition-all duration-500 ${
                  hoveredIndex === idx ? 'project-card-glow' : ''
                }`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-6 md:p-8">
                  {/* Icon */}
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tags - revealed on hover */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredIndex === idx ? 1 : 0, 
                      y: hoveredIndex === idx ? 0 : 10 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full border border-primary/30 bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                  
                  {/* View project link */}
                  <motion.div 
                    className="mt-6 flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button variant="terminal" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="ghost" size="sm" className="text-primary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
