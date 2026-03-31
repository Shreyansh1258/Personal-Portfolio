import { motion } from "framer-motion";
import { Code2, Wrench, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Technical Skills",
    skills: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "React & Next.js", level: 85 },
      { name: "Node.js / Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "SQL & Databases", level: 78 },
      { name: "HTML / CSS / Tailwind", level: 92 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 70 },
      { name: "CI/CD Pipelines", level: 72 },
      { name: "Figma", level: 65 },
      { name: "AWS / Cloud Services", level: 68 },
      { name: "REST & GraphQL APIs", level: 82 },
    ],
  },
  {
    icon: MessageSquare,
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 92 },
      { name: "Communication", level: 88 },
      { name: "Team Collaboration", level: 90 },
      { name: "Time Management", level: 85 },
      { name: "Adaptability", level: 90 },
      { name: "Critical Thinking", level: 87 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-sm">
      <span className="text-foreground">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What I bring to the table
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} delay={ci * 0.15 + si * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
