import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, TrendingUp, GraduationCap, Activity } from 'lucide-react';

const projects = [
  {
    title: 'Walmart Sales Forecasting',
    description: 'Analyzed over 5 years of sales data across 45 stores to find seasonality and demand patterns. Built and validated time series models to predict future sales trends.',
    technologies: ['Python', 'Pandas', 'Time Series Modeling', 'Data Visualization'],
    highlights: [
      'Processed 5+ years of historical data',
      'Created interactive KPI dashboards',
      'Predicted future sales trends'
    ],
    icon: TrendingUp,
    gradient: 'from-primary to-cyan-400',
  },
  {
    title: 'Student Performance Analysis',
    description: 'Cleaned and organized educational data to remove outliers and missing values. Used regression techniques to predict math scores and identify influencing factors.',
    technologies: ['Python', 'Scikit-learn', 'Regression & Classification'],
    highlights: [
      'Data cleaning & preprocessing',
      'Predictive modeling for scores',
      'Actionable academic insights'
    ],
    icon: GraduationCap,
    gradient: 'from-accent to-purple-400',
  },
  {
    title: 'Human Activity Recognition System',
    description: 'Developed a system to classify human actions using real-time motion sensor data. Trained classification models with Random Forest achieving over 91% accuracy.',
    technologies: ['Python', 'Streamlit', 'FastAPI', 'Classification Models'],
    highlights: [
      '91%+ model accuracy',
      'Real-time classification',
      'Interactive web dashboard'
    ],
    icon: Activity,
    gradient: 'from-emerald-400 to-primary',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world data analysis projects showcasing my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <project.icon className="text-background" size={24} />
                  </div>
                  <button className="text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                    <ExternalLink size={20} />
                  </button>
                </div>

                <h3 className="text-xl font-heading font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
