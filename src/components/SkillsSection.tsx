import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "C#", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Data Analysis", level: 85 },
      { name: "Model Training", level: 75 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "ASP.NET Core MVC", level: 90 },
      { name: "Web API", level: 88 },
      { name: "RESTful Services", level: 85 },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "SQL Server", level: 88 }],
  },
  {
    title: "Security",
    skills: [
      { name: "JWT Authentication", level: 85 },
      { name: "Role-Based Auth", level: 82 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "Visual Studio", level: 90 },
      { name: "Postman", level: 88 },
    ],
  },
];

const SkillBar = ({
  name,
  level,
  delay,
  isInView,
}: {
  name: string;
  level: number;
  delay: number;
  isInView: boolean;
}) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="text-sm text-foreground/80">{name}</span>
      <span className="text-xs font-display text-primary">{level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: "linear-gradient(90deg, hsl(200 100% 55%), hsl(270 80% 60%))",
        }}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : {}}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-2">
            <span className="gradient-text">Neural Skill Matrix</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                className="glass rounded-xl p-6 gradient-border hover:neon-glow transition-shadow duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <h3 className="font-display text-sm tracking-wider text-primary mb-4">
                  {category.title}
                </h3>
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={catIdx * 0.1 + skillIdx * 0.15 + 0.3}
                    isInView={isInView}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
