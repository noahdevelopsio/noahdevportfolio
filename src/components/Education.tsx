import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';

export const Education: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container px-4">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-primary text-sm mb-2 block">// education</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Academic Background
          </h2>
          <p className="text-muted-foreground">
            Formal education combined with leadership in technology communities.
          </p>
        </div>

        {/* Education card with certificate reveal */}
        <motion.div
          ref={ref}
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40, rotateX: -15 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ perspective: 1000 }}
        >
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
            {/* Certificate border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-primary/0"
              animate={isInView ? { borderColor: ['hsl(var(--primary) / 0)', 'hsl(var(--primary) / 0.5)', 'hsl(var(--primary) / 0.2)'] } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            
            {/* Decorative seal */}
            <motion.div
              className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
            >
              <GraduationCap className="w-10 h-10 text-primary" />
            </motion.div>

            {/* Institution */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="font-mono text-sm text-primary mb-2">Mountain Top University</div>
              <h3 className="text-2xl font-bold mb-2">Bachelor of Science</h3>
              <p className="text-lg text-muted-foreground mb-6">Computer Science</p>
            </motion.div>

            {/* Honors */}
            <motion.div
              className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Leadership Honor</h4>
                <p className="text-sm text-muted-foreground">
                  President of the National Association of Computing Students (NACOS) MTU Chapter
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 border border-border">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Community</div>
                  <div className="font-mono text-sm text-foreground">500+ Members</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 border border-border">
                <Award className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Achievement</div>
                  <div className="font-mono text-sm text-foreground">Project Q Lead</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};