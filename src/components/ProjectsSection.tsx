import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Employee Management System",
    description:
      "Full-featured employee management platform with role-based authentication, CRUD operations, and secure dashboard management following clean architecture and SDLC principles.",
    tech: ["ASP.NET Core MVC", "C#", "SQL Server", "Role-Based Auth"],
    highlights: [
      "Role-based authentication & authorization",
      "Complete CRUD operations",
      "Secure login & dashboard",
      "Clean architecture / SDLC",
    ],
  },
  {
    title: "Secure Online Banking App",
    description:
      "Enterprise-grade banking application with JWT authentication, fund transfers, transaction history, and account management built on RESTful API architecture.",
    tech: ["ASP.NET Core Web API", "C#", "SQL Server", "JWT Auth"],
    highlights: [
      "JWT authentication system",
      "Fund transfer & transactions",
      "Account management",
      "Scalable RESTful architecture",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-2">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                className="group glass rounded-2xl overflow-hidden gradient-border hover:neon-glow transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* Header bar */}
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-neon-cyan" />

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-display text-sm">0{idx + 1}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-display tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm glass hover:bg-primary/10 transition-colors text-foreground"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
