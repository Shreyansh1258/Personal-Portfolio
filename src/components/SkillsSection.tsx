import { motion } from "framer-motion";
import { Code2, Wrench, Award } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming & Web",
    skills: [
      { name: "C / C++", level: 80 },
      { name: "Python", level: 75 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Basic AI/ML Tools", level: 65 },
    ],
  },
  {
    icon: Award,
    title: "Certifications",
    items: [
      "AI Fluency Framework & Foundations – Anthropic",
      "Data Analysis with Python – freeCodeCamp",
      "Responsive Web Design – freeCodeCamp",
      "India AI Impact Buildathon – HCL GUVI",
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

              {"skills" in cat ? (
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <SkillBar key={skill.name} {...skill} delay={ci * 0.15 + si * 0.08} />
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {cat.items!.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
