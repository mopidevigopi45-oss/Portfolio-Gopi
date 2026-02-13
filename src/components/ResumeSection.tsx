import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="relative py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
            <span className="gradient-text">Download Resume</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />

          <p className="text-muted-foreground mb-8">
            Get the full overview of my skills, experience, and projects.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-display text-sm tracking-wider bg-gradient-to-r from-primary to-secondary text-primary-foreground neon-glow hover:scale-105 transition-transform duration-300 animate-glow-pulse"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
