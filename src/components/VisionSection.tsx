import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cloud, TrendingUp } from "lucide-react";

const goals = [
  {
    icon: TrendingUp,
    title: "AI-Driven Fintech",
    description: "Building intelligent financial systems powered by machine learning for fraud detection, risk analysis, and automated trading.",
  },
  {
    icon: Brain,
    title: "Deep Learning Research",
    description: "Exploring neural network architectures and pushing the boundaries of computer vision and natural language processing.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native AI Apps",
    description: "Developing secure, scalable cloud applications that leverage AI to deliver intelligent experiences at scale.",
  },
];

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="relative py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-2">
            <span className="gradient-text">Future Vision</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goals.map((goal, idx) => (
              <motion.div
                key={goal.title}
                className="glass rounded-xl p-6 text-center gradient-border group hover:neon-glow-purple transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <goal.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-3">{goal.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
