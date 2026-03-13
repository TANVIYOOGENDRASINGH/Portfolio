import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code2 size={24} className="text-brand-purple" />,
    skills: ['Java', 'Python', 'C/C++'],
    color: 'from-brand-purple/20 to-transparent border-brand-purple/30'
  },
  {
    title: 'Frontend',
    icon: <Layout size={24} className="text-brand-blue" />,
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS', 'Tailwind CSS'],
    color: 'from-brand-blue/20 to-transparent border-brand-blue/30'
  },
  {
    title: 'Databases',
    icon: <Database size={24} className="text-brand-teal" />,
    skills: ['MySQL', 'MongoDB'],
    color: 'from-brand-teal/20 to-transparent border-brand-teal/30'
  },
  {
    title: 'Tools',
    icon: <Wrench size={24} className="text-brand-pink" />,
    skills: ['VS Code', 'Figma', 'Canva', 'Git'],
    color: 'from-brand-pink/20 to-transparent border-brand-pink/30'
  },
  {
    title: 'Concepts',
    icon: <Lightbulb size={24} className="text-yellow-400" />,
    skills: ['Object Oriented Programming', 'Data Structures', 'Algorithms'],
    color: 'from-yellow-400/20 to-transparent border-yellow-400/30'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass p-8 rounded-3xl border bg-gradient-to-b ${category.color} hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-darker flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-full text-sm font-medium bg-brand-darker/50 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
