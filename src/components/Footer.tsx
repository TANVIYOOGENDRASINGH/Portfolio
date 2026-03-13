import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/10 bg-brand-darker/80 backdrop-blur-xl z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
              Tanvi<span className="text-brand-pink">.</span>
            </a>
            <p className="text-sm text-slate-400">Building modern web experiences.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#certificates">Certificates</FooterLink>
          </div>

          {/* Socials & Top */}
          <div className="flex items-center gap-4">
            <SocialIcon href="https://github.com" icon={<Github size={20} />} />
            <SocialIcon href="https://linkedin.com" icon={<Linkedin size={20} />} />
            <SocialIcon href="mailto:tanviyoogendra@gmail.com" icon={<Mail size={20} />} />
            
            <button 
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-brand-purple hover:border-brand-purple transition-all duration-300 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Tanvi Singh. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Designed & Built with <span className="text-brand-pink">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
