'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Volume2 } from 'lucide-react';
import { useState } from 'react';

const DemoReel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isPlaying, setIsPlaying] = useState(false);

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
    <section className="py-20 bg-white" id="demo-reel">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center text-text mb-4"
          >
            Demo Reel 2024
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-text/80 text-center mb-12 max-w-2xl mx-auto"
          >
            A showcase of my latest cinematography and editing work across various projects and genres
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {/* Video Placeholder */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30"
              >
                <Play size={32} className="text-white ml-1" fill="white" />
              </motion.div>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">
                    Cinematography & Editing Reel
                  </h3>
                  <p className="text-white/80 text-sm">
                    Duration: 2:45 • 4K Resolution
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Volume2 size={18} />
                  <span className="text-sm">Sound On</span>
                </div>
              </div>
            </div>

            {/* Film grain effect */}
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiLz4KICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNCIvPgo8L3N2Zz4K')] pointer-events-none"></div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '20+', label: 'Happy Clients' },
              { number: '100%', label: 'Satisfaction Rate' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-text/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoReel;