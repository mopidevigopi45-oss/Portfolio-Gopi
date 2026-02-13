import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("INITIALIZING");

  useEffect(() => {
    const phases = ["INITIALIZING", "SCANNING NEURAL NETWORKS", "LOADING AI MODULES", "SYSTEM READY"];
    let current = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15 + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        const phaseIndex = Math.min(Math.floor(next / 30), phases.length - 1);
        if (phaseIndex !== current) {
          current = phaseIndex;
          setPhase(phases[phaseIndex]);
        }
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-24 h-24 mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary neon-glow" />
          <div className="absolute inset-2 rounded-full border border-secondary/30" />
          <div
            className="absolute inset-2 rounded-full border border-transparent border-b-secondary"
            style={{ animation: "spin 2s linear infinite reverse" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
          </div>
        </motion.div>

        <div className="w-64 mb-4">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(200 100% 55%), hsl(270 80% 60%))",
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <p className="font-display text-xs tracking-[0.3em] text-primary/70">
          {phase}
        </p>
        <p className="font-display text-xs text-muted-foreground mt-2">
          {Math.floor(progress)}%
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
