import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-max border-brand-purple/30">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Available for Opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Tanvi Singh</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-slate-300 h-[40px]">
              <Typewriter
                words={['Computer Engineering Student', 'Data Analytics Enthusiast', 'Frontend Developer']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Passionate about building modern web applications, exploring data-driven solutions, and creating intuitive digital experiences that make a difference.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a href="#projects" className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105">
                Download Resume <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <SocialLink href="https://github.com" icon={<Github size={24} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} />
              <SocialLink href="mailto:tanviyoogendra@gmail.com" icon={<Mail size={24} />} />
            </div>
          </motion.div>
          
          {/* Right Content - Abstract 3D/Illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Glowing orb behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple via-brand-pink to-brand-blue rounded-full blur-[80px] opacity-40 animate-pulse"></div>
              
              {/* Glassmorphism card floating */}
              <motion.div 
                animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-10 glass rounded-3xl border border-white/20 overflow-hidden flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent"
              >
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple p-1 mb-6">
                    <div className="w-full h-full rounded-full bg-brand-darker flex items-center justify-center overflow-hidden">
                      {/* Placeholder for actual image */}
                      <span className="text-4xl font-bold text-gradient">TS</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Tanvi Singh</h3>
                  <p className="text-brand-pink font-medium">Developer & Analyst</p>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <FloatingElement delay={0} top="10%" left="-10%" icon="💻" />
              <FloatingElement delay={1.5} top="70%" left="-5%" icon="📊" />
              <FloatingElement delay={3} top="20%" right="-10%" icon="🚀" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-purple/20 hover:border-brand-purple/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}

function FloatingElement({ delay, top, left, right, icon }: { delay: number; top: string; left?: string; right?: string; icon: string }) {
  return (
    <motion.div
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl border border-white/20 shadow-xl"
      style={{ top, left, right }}
    >
      {icon}
    </motion.div>
  );
}
