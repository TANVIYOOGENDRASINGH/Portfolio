import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Let's connect and build something amazing together.</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={<Mail size={24} className="text-brand-pink" />} 
                  title="Email" 
                  value="tanviyoogendra@gmail.com" 
                  href="mailto:tanviyoogendra@gmail.com" 
                />
                <ContactItem 
                  icon={<Phone size={24} className="text-brand-blue" />} 
                  title="Phone" 
                  value="+91 99690 53032" 
                  href="tel:+919969053032" 
                />
                <ContactItem 
                  icon={<MapPin size={24} className="text-brand-purple" />} 
                  title="Location" 
                  value="Mumbai, Maharashtra, India" 
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl border border-white/10 flex flex-col gap-6 relative overflow-hidden">
              
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 bg-brand-darker/90 backdrop-blur-md flex flex-col items-center justify-center rounded-3xl border border-brand-teal/50"
                >
                  <CheckCircle2 size={64} className="text-brand-teal mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-300">I'll get back to you soon.</p>
                </motion.div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Your Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink/50 transition-all resize-none"
                  placeholder="Hello Tanvi, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group relative w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] disabled:opacity-70 disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-slate-400 mb-1">{title}</h4>
        <p className="text-lg font-semibold text-white group-hover:text-brand-blue transition-colors">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-6 group cursor-pointer">
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-6 group">
      {content}
    </div>
  );
}
