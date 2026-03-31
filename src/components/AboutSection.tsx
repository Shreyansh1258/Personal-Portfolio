import { motion } from "framer-motion";
import { Target, Lightbulb, Users } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const highlights = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "I focus on delivering measurable results and impactful solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learner",
    description: "Always exploring new technologies and refining my craft.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "I thrive in collaborative environments and value clear communication.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Passionate about building great software
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <img
              src={profileImg}
              alt="Shreyansh Pandey"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-lg shrink-0"
            />
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Shreyansh Pandey — a motivated and detail-oriented aspiring software engineer
              from Uttar Pradesh, India. I'm passionate about frontend development and AI/ML,
              and I love turning ideas into clean, functional applications. I'm actively seeking
              opportunities where I can contribute, grow, and make a meaningful impact.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 hover:glow-border transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
