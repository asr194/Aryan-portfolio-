'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VideoPlayer from './VideoPlayer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="max-w-md mx-auto">
                <VideoPlayer
                  src="/videos/about/Aryan (1).mp4"
                  title="Meet Aryan - Cinematographer"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6 order-1 lg:order-2">
              <p className="text-lg text-text/80 leading-relaxed">
                I'm Aryan, a passionate cinematographer and video editor who brings stories to life 
                through visual storytelling. Each piece showcases different aspects of my craft, 
                from dynamic camera movements to precise editing techniques.
              </p>
              
              <p className="text-lg text-text/80 leading-relaxed">
                My work serves as both a portfolio and a behind-the-scenes look into my 
                creative process. I believe every frame tells a story, and I'm here to help 
                bring your vision to life through the lens.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {['Cinematography', 'Video Editing', 'Visual Storytelling', 'Creative Direction', 'Post-Production'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <motion.div className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">5+</div>
                    <div className="text-sm text-text/70">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-secondary mb-1">100+</div>
                    <div className="text-sm text-text/70">Projects Completed</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;