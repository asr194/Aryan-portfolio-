'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import VideoPlayer from './VideoPlayer';

const InstagramShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const reels = [
    {
      id: 'reel-1',
      videoSrc: '/videos/SnapInsta.to_AQMFbcICqXMrPrQha_cQBHLxTGCmOf4XvUEJ7Su1JZ95135HiuhHDeHEZ_uhFLnOsbu7jMhXFuhC4_Xntm5ruc-ijeTF5l1VA9DRqQs.mp4',
      title: 'Cinematic Vision',
      description: 'A masterful display of dynamic camera movements and visual storytelling. This piece showcases advanced cinematography techniques including smooth tracking shots, creative angles, and precise timing that creates an immersive viewing experience.',
      techniques: ['Dynamic Camera Work', 'Visual Storytelling', 'Creative Angles']
    },
    {
      id: 'reel-2',
      videoSrc: '/videos/SnapInsta.to_AQOBuSJiXOCuHoUOgqJd2PIlvUCGYION0vVnPfKbMKEncMZguAQ9TCjtXsyUfOgHPiAAUA616DbkCLmuBd-3fwlwyEltN3IF3IHFr0k.mp4',
      title: 'Visual Poetry',
      description: 'An artistic exploration of emotion through motion and color. This reel demonstrates expert use of lighting, composition, and editing rhythm to create a poetic narrative that resonates with viewers on an emotional level.',
      techniques: ['Artistic Lighting', 'Color Grading', 'Emotional Narrative']
    },
    {
      id: 'reel-3',
      videoSrc: '/videos/SnapInsta.to_AQOUosI1Jcf4u9gfNCM0vdlTq0wyvMWogwvGOzhr2EpUH363gOq0M9e3mCPw8IydqhuC9bXj4CoZ5cLb6zKcvlm1.mp4',
      title: 'Creative Flow',
      description: 'Seamless transitions and perfect timing showcase technical mastery in video editing. This piece highlights innovative transition techniques, rhythm matching, and creative problem-solving in post-production workflow.',
      techniques: ['Seamless Transitions', 'Rhythm Matching', 'Technical Editing']
    },
    {
      id: 'reel-4',
      videoSrc: '/videos/SnapInsta.to_AQOvoSHSPW5ZrZoWtGt17c2Rdw4QYbNsgtDfCu9VVpqUEf18DC5Y24GgHreq-0kErcoYkSvQK_L7JWUQyQ-qBMXx.mp4',
      title: 'Artistic Expression',
      description: 'Where technical expertise meets creative vision. This reel demonstrates the perfect balance between professional cinematography standards and artistic innovation, creating content that is both technically sound and creatively inspiring.',
      techniques: ['Professional Standards', 'Creative Innovation', 'Technical Excellence']
    },
    {
      id: 'reel-5',
      videoSrc: '/videos/SnapInsta.to_AQPpj9TJVDTUo_TH9stYuOR93i_FywKA62LXcWS_q7CgjQpB9W5fdaXEoOA6bKzBgShtE-aae7uuIEtnI8EYiUZATHgNBUzyYK_rhKA.mp4',
      title: 'Latest Creation',
      description: 'The most recent work showcasing evolved style and refined technique. This piece represents the culmination of experience and growth, featuring advanced cinematography methods and sophisticated post-production techniques.',
      techniques: ['Advanced Methods', 'Refined Technique', 'Sophisticated Post-Production']
    }
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
    <section ref={containerRef} className="py-20 bg-white" id="instagram-reels">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-text mb-6">
              My Latest Work
            </h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto">
              Explore my cinematography and video editing through these featured reels. 
              Each piece showcases different aspects of visual storytelling, from dynamic camera work to precise editing techniques.
            </p>
          </motion.div>

          {/* Vertical Parallax Instagram Reels */}
          <motion.div 
            variants={itemVariants}
            className="space-y-12"
          >
            {reels.map((reel, index) => {
              const yOffset = useTransform(
                scrollYProgress, 
                [0, 1], 
                [0, (index % 2 === 0 ? -100 : 100)]
              );

              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={reel.id}
                  style={{ y: yOffset }}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Reel Preview */}
                  <div className="w-full lg:w-1/3 max-w-sm">
                    <VideoPlayer
                      src={reel.videoSrc}
                      title={reel.title}
                    />
                  </div>

                  {/* Reel Details */}
                  <div className={`w-full lg:w-2/3 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-text mb-1">
                            {reel.title}
                          </h3>
                          <p className="text-text/60 text-sm uppercase tracking-wide font-medium">
                            Instagram Reel • Featured Work
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-text/80 leading-relaxed mb-6">
                        {reel.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {reel.techniques.map((technique) => (
                          <span
                            key={technique}
                            className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                          >
                            {technique}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5+', label: 'Featured Reels', icon: '🎬' },
              { number: '10K+', label: 'Total Views', icon: '👁️' },
              { number: '500+', label: 'Likes', icon: '❤️' },
              { number: '50+', label: 'Shares', icon: '📤' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text/70 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramShowcase;