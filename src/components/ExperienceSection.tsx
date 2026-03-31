import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AI Fluency Framework & Foundations",
    org: "Anthropic",
    description: "Comprehensive understanding of AI fundamentals, prompt engineering, and responsible AI usage.",
    link: "https://verify.skilljar.com/c/h7dsma937iu6",
  },
  {
    title: "Data Analysis with Python",
    org: "freeCodeCamp",
    description: "Proficiency in data manipulation, visualization, and analysis using Python libraries.",
    link: "https://freecodecamp.org/certification/shreyansh1258/data-analysis-with-python-v7",
  },
  {
    title: "Responsive Web Design",
    org: "freeCodeCamp",
    description: "Modern responsive web design techniques using HTML and CSS.",
    link: "https://freecodecamp.org/certification/shreyansh1258/responsive-web-design-v9",
  },
  {
    title: "India AI Impact Buildathon",
    org: "HCL GUVI",
    description: "Participated in a national-level AI buildathon focused on real-world impact solutions.",
    link: "https://www.guvi.in/share-certificate/5Im0aH7gO17620B111",
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
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Certifications & Learning</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">My journey so far</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {certifications.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center">
                  <Award size={16} className="text-primary" />
                </div>

                <div className="glass-card rounded-xl p-5 flex-1">
                  <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-sm text-primary/80 mb-2">{item.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <ExternalLink size={13} /> View Credential
                    </a>
                  )}
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
