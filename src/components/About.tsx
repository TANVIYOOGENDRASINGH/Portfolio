import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden glass border-2 border-white/10 shadow-2xl group">
              {/* Placeholder for actual photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                alt="Tanvi Singh" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-xl">
                  8.05
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Current</p>
                  <p className="text-white font-bold">CGPA</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-lg text-slate-300 leading-relaxed relative z-10">
                I am a <span className="text-white font-semibold">Computer Engineering student</span> passionate about data analytics, web development, and UI/UX design. I enjoy analyzing data, building modern web applications, and creating intuitive digital experiences.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <GraduationCap className="text-brand-pink" /> Education
              </h3>
              
              <div className="relative pl-8 border-l-2 border-brand-purple/30 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-brand-darker border-4 border-brand-blue"></div>
                  <div className="glass p-6 rounded-2xl border border-white/10 hover:border-brand-blue/50 transition-colors">
                    <span className="text-sm font-medium text-brand-blue mb-2 block">2023 – 2027</span>
                    <h4 className="text-xl font-bold text-white mb-1">B.Tech Computer Engineering</h4>
                    <p className="text-slate-400">Shah & Anchor Kutchhi Engineering College, Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths & Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="glass p-6 rounded-2xl border border-white/10 hover:-translate-y-1 transition-transform duration-300">
                <Award className="text-brand-teal mb-4" size={28} />
                <h4 className="text-lg font-bold text-white mb-2">Key Strengths</h4>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Problem Solving</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Analytical Thinking</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Adaptability</li>
                </ul>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/10 hover:-translate-y-1 transition-transform duration-300">
                <Heart className="text-brand-pink mb-4" size={28} />
                <h4 className="text-lg font-bold text-white mb-2">Interests</h4>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-pink"></span> Data Analytics</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-pink"></span> UI/UX Design</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-pink"></span> Open Source</li>
                </ul>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
