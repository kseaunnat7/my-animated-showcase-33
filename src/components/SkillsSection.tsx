import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, BarChart3, Wrench, Brain, Users } from 'lucide-react';

const technicalSkills = [
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'SQL', level: 85, category: 'Languages' },
  { name: 'HTML/CSS', level: 75, category: 'Languages' },
  { name: 'Pandas & NumPy', level: 88, category: 'Libraries' },
  { name: 'Scikit-learn', level: 80, category: 'Libraries' },
  { name: 'Streamlit & FastAPI', level: 75, category: 'Libraries' },
];

const tools = [
  'Excel', 'Tableau', 'Jupyter Notebook', 'Git', 'GitHub', 'VS Code', 'SQL Server'
];

const competencies = [
  { icon: Database, label: 'Data Cleaning', description: 'Transforming raw data into clean, usable formats' },
  { icon: BarChart3, label: 'Exploratory Analysis', description: 'Uncovering patterns and insights in data' },
  { icon: Code2, label: 'Statistical Modeling', description: 'Building predictive and analytical models' },
  { icon: Wrench, label: 'Data Visualization', description: 'Creating compelling visual narratives' },
];

const softSkills = [
  { icon: Brain, skills: ['Problem-Solving', 'Analytical Thinking', 'Adaptability'] },
  { icon: Users, skills: ['Teamwork', 'Communication'] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring data to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-3">
              <Code2 className="text-primary" size={24} />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar h-2">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-3">
                <Wrench className="text-primary" size={24} />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-3">
                <Brain className="text-accent" size={24} />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.flatMap(group => group.skills).map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="px-4 py-2 rounded-lg bg-accent/10 text-accent-foreground font-medium text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-heading font-semibold mb-8 text-center">Core Competencies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {competencies.map((comp, index) => (
              <motion.div
                key={comp.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <comp.icon className="text-primary" size={28} />
                </div>
                <h4 className="font-heading font-semibold mb-2">{comp.label}</h4>
                <p className="text-muted-foreground text-sm">{comp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
