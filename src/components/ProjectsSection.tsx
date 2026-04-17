import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "AI Resume Analyzer",
    description: "An AI-powered web app that analyzes resumes and provides smart feedback on skills, formatting, and keyword optimization.",
    tech: ["Python", "pandas", "scikit-learn", "NLP"],
    impact: "Helps users improve resume quality with actionable insights.",
    status: "Live",
    github: "https://github.com/Shreyansh1258/Resume-Analyzer",
    demo: "https://resume-analyzer-2-02o8.onrender.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 group hover:glow-border transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm text-primary/80 mb-5 italic">
                ↗ {project.impact}
              </p>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={15} /> Code
                  </a>
                )}
                {!project.github && (
                  <span className="text-xs text-muted-foreground italic">GitHub link coming soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
