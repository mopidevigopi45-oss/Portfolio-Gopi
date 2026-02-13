import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import passphoto from "@/assets/passphoto.jpg";

const TypeWriter = ({ texts, speed = 80 }: { texts: string[]; speed?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText(texts[textIndex].slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(texts[textIndex].slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed]);

  return (
    <span>
      {currentText}
      <span className="inline-block w-0.5 h-5 ml-1 bg-primary animate-pulse-glow align-middle" />
    </span>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 pt-20 pb-16">
        <motion.div
          className="flex-1 text-center lg:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="font-display text-xs tracking-[0.4em] text-primary mb-4 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            AI / ML Engineer & Full Stack Developer
          </motion.p>

          <motion.h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="gradient-text">
              <TypeWriter
                texts={["Mopidevi Gopi Venkaiah"]}
                speed={50}
              />
            </span>
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl text-muted-foreground mb-4 font-accent font-medium h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <TypeWriter
              texts={[
                "Machine Learning Engineer",
                "ASP.NET Core Developer",
                "Secure Web API Architect",
                "AI-Driven Solutions Builder",
              ]}
            />
          </motion.div>

          <motion.p
            className="text-sm text-muted-foreground mb-8 font-accent tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            AI &nbsp;|&nbsp; Machine Learning &nbsp;|&nbsp; ASP.NET Core &nbsp;|&nbsp; Secure Web APIs
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg font-display text-sm tracking-wider bg-primary text-primary-foreground neon-glow hover:scale-105 transition-transform duration-300 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-display text-sm tracking-wider glass gradient-border hover:scale-105 transition-transform duration-300 text-center text-foreground"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-shrink-0 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-neon-cyan/20 blur-2xl animate-pulse-glow" />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden gradient-border neon-glow">
              <img
                src={passphoto}
                alt="Mopidevi Gopi Venkaiah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
