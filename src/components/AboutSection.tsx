import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-2">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="glass rounded-2xl p-8 sm:p-10 gradient-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 animate-pulse-glow" />
              <p className="text-foreground/90 leading-relaxed">
                I'm <span className="text-primary font-semibold">Mopidevi Gopi Venkaiah</span>, a final-year
                B.Tech Computer Science student from India with a deep passion for Artificial Intelligence,
                Machine Learning, and building secure, scalable backend systems.
              </p>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 animate-pulse-glow" />
              <p className="text-foreground/80 leading-relaxed">
                My expertise spans from designing intelligent AI-driven applications to crafting robust
                ASP.NET Core Web APIs with enterprise-grade security. I believe in clean architecture,
                following SDLC principles, and writing code that scales.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0 animate-pulse-glow" />
              <p className="text-foreground/80 leading-relaxed">
                With a problem-solving mindset and a strong foundation in data analysis and model training,
                I'm driven to build next-generation fintech systems and secure cloud-native AI applications
                that make a real-world impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
