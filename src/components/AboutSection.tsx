import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-6">
              Turning Data into <span className="gradient-text">Decisions</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a detail-oriented aspiring Data Analyst with a strong background in SQL and Python. 
              I have hands-on experience in data preparation, modeling, and visualization.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Skilled at identifying trends, cleaning large datasets and supporting data-driven decisions. 
              I'm passionate about solving real-world problems through analytics and committed to ensuring 
              data accuracy and usable insights.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase size={18} className="text-primary" />
                <span>Immediate Availability</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">B.Sc. CSIT</h4>
                  <p className="text-primary text-sm mb-2">Swastik College, Tribhuvan University</p>
                  <p className="text-muted-foreground text-sm">
                    Currently in 8th Semester • Expected Graduation: 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">Relevant Courses</h4>
                  <p className="text-muted-foreground text-sm">
                    Data Science, Artificial Intelligence, Statistics, Database Management
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Business Intelligence', 'Fintech Analytics', 'Data Engineering'].map((interest) => (
                <span 
                  key={interest}
                  className="px-4 py-2 rounded-full text-sm bg-secondary text-muted-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
