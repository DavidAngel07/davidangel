import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";
import heroBg from "@/assets/optimized/hero-bg.webp";

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t } = useTranslation();
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      gradient: "linear-gradient(to bottom right, #ec4899, #a855f7, #7c3aed)"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/573143814895",
      label: "WhatsApp",
      gradient: "linear-gradient(to bottom right, #4ade80, #15803d)"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/cristian-david-angel-osorio",
      label: "LinkedIn",
      gradient: "linear-gradient(to bottom right, #60a5fa, #1d4ed8)"
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="City skyline"
          className="w-full h-full object-cover object-[75%_center] md:object-center"
          fetchPriority="high"
        />
        {/* Gradiente mejorado para móviles */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black md:from-black/20 md:via-transparent md:to-transparent"></div>
      </div>

      {/* Content */}
      <div
        ref={elementRef}
        className={`relative z-10 pt-20 pl-8 md:pl-16 lg:pl-24 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="flex flex-col items-start text-left py-16 max-w-2xl space-y-4">

          {/* Name and Title */}
          <div className="-space-y-2 md:-space-y-4">
            <div className="flex flex-col -space-y-4 md:-space-y-5">
              <h1 className="text-7xl font-jost font-bold text-primary-foreground ml-1 leading-none md:ml-2 lg:ml-4">
                DAVID
              </h1>
              <h1 className="text-9xl md:text-[12rem] lg:text-[16rem] font-anton font-bold text-primary-foreground leading-none">
                ANGEL
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-poppins text-primary-foreground/90 font-medium">
              {t.hero.role} <span className="text-[#10bdff]">{t.hero.roleSecondary}</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary-foreground/60 hover:border-transparent transition-all duration-300 ease-out flex items-center justify-center"
                style={{
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = social.gradient;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <social.icon className="h-6 w-6 text-primary-foreground group-hover:text-white group-hover:scale-125 transition-all duration-300 ease-out relative z-10" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-4">
            <Button
              variant="outline"
              size="lg"
              className="text-xl bg-background/0 border-primary-foreground/60 hover:bg-background/40 transition-smooth rounded-full text-[#10bdff] hover:text-black"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.hero.description}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
