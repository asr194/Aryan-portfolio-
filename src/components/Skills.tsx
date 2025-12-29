'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Adobe Premiere Pro', level: 95 },
    { name: 'DaVinci Resolve', level: 90 },
    { name: 'After Effects', level: 85 },
    { name: 'Cinematography', level: 90 },
    { name: 'Color Grading', level: 80 },
    { name: 'Sound Design', level: 75 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center text-text mb-12"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-text">{skill.name}</span>
                  <span className="text-secondary font-semibold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-text/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-lg text-text/80 max-w-2xl mx-auto">
              I'm constantly evolving my craft, staying current with the latest 
              filmmaking techniques, editing software updates, and industry trends. 
              Always ready to bring fresh perspectives to every project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;