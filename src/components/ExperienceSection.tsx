import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    type: "work" as const,
    title: "Frontend Developer Intern",
    org: "Tech Company Inc.",
    period: "Jun 2024 – Aug 2024",
    description: "Built responsive UI components and improved page load performance by 35%. Collaborated with a cross-functional team of 8 using Agile methodology.",
  },
  {
    type: "education" as const,
    title: "B.S. Computer Science",
    org: "University Name",
    period: "2021 – 2025",
    description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering. GPA: 3.7/4.0",
  },
  {
    type: "work" as const,
    title: "Freelance Web Developer",
    org: "Self-Employed",
    period: "2023 – Present",
    description: "Designed and developed 5+ client websites. Managed projects end-to-end from requirements gathering to deployment and maintenance.",
  },
  {
    type: "education" as const,
    title: "Full-Stack Web Development Certificate",
    org: "Online Bootcamp",
    period: "2023",
    description: "Completed 500+ hours of intensive training in React, Node.js, databases, and deployment pipelines.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Experience & Education</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">My journey so far</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center">
                  {item.type === "work" ? (
                    <Briefcase size={16} className="text-primary" />
                  ) : (
                    <GraduationCap size={16} className="text-primary" />
                  )}
                </div>

                <div className="glass-card rounded-xl p-5 flex-1">
                  <span className="text-xs text-muted-foreground">{item.period}</span>
                  <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-sm text-primary/80 mb-2">{item.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
