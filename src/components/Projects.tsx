import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Server, Layout } from 'lucide-react';

const projects = [
  {
    title: 'Hospital Management System',
    description: 'A comprehensive system for managing hospital operations including role-based authentication, appointment booking, and secure data handling.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000',
    tags: ['Python', 'Flask', 'MySQL', 'SQLAlchemy', 'HTML', 'CSS'],
    features: [
      'Role based authentication (Admin, Doctor, Patient)',
      'Appointment booking system',
      'CRUD operations for doctors and patients',
      'Secure database schema',
      'Data validation and logging'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'from-brand-blue to-brand-purple'
  },
  // Adding a placeholder second project to make the grid look better
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with real-time filtering and export capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Next.js', 'Tailwind', 'Chart.js', 'Python'],
    features: [
      'Real-time data visualization',
      'Interactive filtering',
      'Export to CSV/PDF',
      'Responsive design',
      'REST API integration'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'from-brand-purple to-brand-pink'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.2)]"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-brand-darker/60 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Tech Stack Floating Tags */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-black/50 backdrop-blur-md text-white rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 text-xs font-semibold bg-black/50 backdrop-blur-md text-white rounded-full border border-white/20">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-8 relative">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Database size={16} className="text-brand-purple" /> Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-brand-pink mt-1">▹</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium hover:shadow-lg transition-all hover:scale-105`}
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
