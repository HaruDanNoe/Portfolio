import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import type { ReactNode } from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-dark text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center text-center">

          <span className="font-display text-primary font-bold uppercase tracking-widest text-xs mb-3 block">
            Get in Touch
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
            Let's Create <br />
            Something <span className="text-primary italic">Great Together</span>
          </h2>

          {/* CONTACT INFO */}
          <div className="space-y-5 mb-10 flex flex-col items-center">

            <ContactInfo
              icon={<Mail className="text-primary" size={18} />}
              text="eldaneazerudo@gmail.com"
              label="Email Me"
            />

          </div>

          {/* SOCIALS */}
          <div className="flex gap-3 justify-center">
            <SocialBtn
              icon={<Instagram size={18} />}
              href="https://www.instagram.com/kirei_tochihu/"
            />
            <SocialBtn
              icon={<Linkedin size={18} />}
              href="www.linkedin.com/in/danea-zerudo-9b0290325"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* CONTACT INFO */
function ContactInfo({
  icon,
  text,
  label,
}: {
  icon: ReactNode;
  text: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 justify-center">

      <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center">
        {icon}
      </div>

      <div className="text-left">
        <p className="text-gray-400 text-[11px] uppercase tracking-wider">
          {label}
        </p>
        <p className="text-sm font-medium text-white">
          {text}
        </p>
      </div>

    </div>
  );
}

/* SOCIAL BUTTON */
function SocialBtn({
  icon,
  href,
}: {
  icon: ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary hover:text-dark transition-all transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}