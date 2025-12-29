'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Cinematic Reel 1',
      description: 'Dynamic cinematography showcasing creative camera movements and visual storytelling techniques.',
      instagramUrl: 'https://www.instagram.com/reel/DLkx3f2Imh0/?igsh=MXczZmZpM3F4ZGtibw==',
      embedId: 'DLkx3f2Imh0',
      tech: ['Cinematography', 'Color Grading', 'Motion'],
      type: 'Reel',
      duration: '0:30'
    },
    {
      title: 'Visual Story 2', 
      description: 'Compelling narrative through precise editing and atmospheric lighting design.',
      instagramUrl: 'https://www.instagram.com/reel/DQg4aY3D3-o/?igsh=MW01NHRyODlvcHVzag==',
      embedId: 'DQg4aY3D3-o',
      tech: ['Editing', 'Lighting', 'Storytelling'],
      type: 'Reel',
      duration: '0:45'
    },
    {
      title: 'Creative Vision 3',
      description: 'Innovative approach to visual composition with smooth transitions and dynamic framing.',
      instagramUrl: 'https://www.instagram.com/reel/DP6Uus7jzAe/?igsh=ZW8wMDd5M3c5c2E1',
      embedId: 'DP6Uus7jzAe',
      tech: ['Composition', 'Transitions', 'Framing'],
      type: 'Reel',
      duration: '0:35'
    },
    {
      title: 'Artistic Expression 4',
      description: 'Artistic cinematography combining technical expertise with creative vision.',
      instagramUrl: 'https://www.instagram.com/reel/DPWXZ7BgSfA/?igsh=MWp1dzhxdWtuaGs2bg==',
      embedId: 'DPWXZ7BgSfA',
      tech: ['Artistry', 'Technical', 'Vision'],
      type: 'Reel',
      duration: '0:40'
    },
    {
      title: 'Latest Work 5',
      description: 'Recent cinematography work demonstrating evolved style and refined technique.',
      instagramUrl: 'https://www.instagram.com/reel/DSl-6fIiHbM/?igsh=MW03NzNtMWQ2N3hoMw==',
      embedId: 'DSl-6fIiHbM',
      tech: ['Latest', 'Refined', 'Evolved'],
      type: 'Reel',
      duration: '0:50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center text-text mb-12"
          >
            Featured Work
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-200"
                style={{
                  transform: inView ? `translateY(${index * -10}px)` : 'translateY(50px)'
                }}
              >
                {/* Instagram Embed Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2">📱</span>
                    <span className="text-sm text-gray-600">Instagram Reel</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-text">
                      {project.title}
                    </h3>
                    <span className="text-sm text-accent font-medium">
                      {project.duration}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-text/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-text/80 hover:text-secondary transition-colors duration-200"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[6px] border-l-current border-y-[4px] border-y-transparent"></div>
                      </div>
                      <span>Watch on Instagram</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;