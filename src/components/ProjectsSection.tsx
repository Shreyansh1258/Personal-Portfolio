import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with cart management, payment integration, and an admin dashboard for product management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    impact: "Reduced checkout time by 40% through optimized UX flow.",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, drag-and-drop organization, and team workspaces.",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket"],
    impact: "Improved team productivity tracking by 60% in beta testing.",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description: "An intelligent content creation tool that leverages OpenAI APIs to help marketers generate blog posts and social copy.",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    impact: "Generated 10,000+ content pieces in the first month of launch.",
    github: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and Tailwind CSS featuring smooth animations and optimized performance.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    impact: "Achieved 98+ Lighthouse performance score.",
    github: "https://github.com",
    live: "https://example.com",
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
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={15} /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
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
