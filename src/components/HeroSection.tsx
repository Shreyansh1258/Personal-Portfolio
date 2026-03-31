import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 text-center max-w-3xl py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-gradient">Shreyansh Pandey</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            Aspiring Software Engineer | Frontend Developer | AI/ML Enthusiast
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Briefcase size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce block">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
