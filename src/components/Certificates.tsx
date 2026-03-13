import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Google Android Development',
    issuer: 'Google',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Master in MongoDB Atlas',
    issuer: 'MongoDB',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Spoken Tutorial - C',
    issuer: 'IIT Bombay',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Spoken Tutorial - Java',
    issuer: 'IIT Bombay',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Spoken Tutorial - Python',
    issuer: 'IIT Bombay',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=800',
    link: '#'
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-brand-purple/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-darker/50 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-none"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white font-medium flex items-center gap-2 hover:bg-brand-purple hover:border-brand-purple transition-colors"
                  >
                    Preview <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shadow-lg border-2 border-brand-darker z-30">
                  <Award size={20} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 pr-8">{cert.title}</h3>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span className="font-medium text-brand-pink">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
