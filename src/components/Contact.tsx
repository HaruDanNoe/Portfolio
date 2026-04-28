import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import type { ReactNode } from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark text-white relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="font-display text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Let's Create <br />
              Something <span className="text-primary italic">Great Together</span>
            </h2>
            
            <div className="space-y-6 mb-12">
              <ContactInfo icon={<Mail className="text-primary" />} text="eldaneazerudo@gmail.com" label="Email Me" />
              <ContactInfo icon={<Phone className="text-primary" />} text="+639 096 762 817" label="Call Me" />
              <ContactInfo icon={<MapPin className="text-primary" />} text="Brooklyn, New York, US" label="Visit Me" />
            </div>

            <div className="flex gap-4">
              <SocialBtn icon={<Instagram size={20} />} />
              <SocialBtn icon={<Twitter size={20} />} />
              <SocialBtn icon={<Linkedin size={20} />} />
              <SocialBtn icon={<Github size={20} />} />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="Inquiry" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="Ameli Nimbus" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="hello@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-colors h-32 resize-none" placeholder="Write your message here..."></textarea>
              </div>
              <button className="w-full bg-primary text-dark font-bold py-5 rounded-2xl hover:bg-primary-dark transition-all transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, text, label }: { icon: ReactNode, text: string, label: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <p className="text-xl font-bold">{text}</p>
      </div>
    </div>
  );
}

function SocialBtn({ icon }: { icon: ReactNode }) {
  return (
    <button className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-dark transition-all transform hover:-translate-y-1">
      {icon}
    </button>
  );
}
