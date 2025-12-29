'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
    hidden: { y: 20, opacity: 0 },
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
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10"
      />
      
      {/* Floating elements for parallax effect */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "200%"]) }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]) }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl"
      />
      
      <motion.div
        style={{ y: textY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-text mb-6"
        >
          Hi, I'm{' '}
          <span className="font-bold" style={{ color: '#e53e3e' }}>
            Aryan
          </span>
          <span className="text-text">:</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-text/80 mb-8 max-w-2xl mx-auto"
        >
          Cinematographer & Video Editor crafting visual stories that captivate and inspire
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full transition-all duration-200 shadow-xl font-black text-lg text-white border-2"
            style={{ 
              backgroundColor: '#e53e3e',
              borderColor: '#e53e3e'
            }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            HIRE ME
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 100]) }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-text/60"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;