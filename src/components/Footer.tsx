import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/davidangelosorio",
      label: "GitHub",
      color: "#ffffff",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/david-angel-osorio",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: Mail,
      href: "mailto:davidangelosorio29@gmail.com",
      label: "Email",
      color: "#10bdff",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-[#01041b] text-primary-foreground py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#10bdff] to-[#2b46ff] rounded-xl flex items-center justify-center shadow-lg">
              <span className="font-anton font-bold text-white text-xl">DA</span>
            </div>
            <span className="font-jost font-bold text-2xl text-white">David Angel Osorio</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                aria-label={social.label}
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:scale-110">
                  {/* Background de color que se expande */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"
                    style={{ background: social.color }}
                  ></div>

                  <social.icon
                    className="h-5 w-5 relative z-10 transition-colors duration-300"
                    style={{ color: social.color }}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#10bdff] to-transparent"></div>

          {/* Copyright */}
          <p className="text-white/60 text-sm flex items-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-[#10bdff] fill-[#10bdff] animate-pulse" /> por David Angel
          </p>

          <p className="text-white/40 text-xs">
            © {currentYear} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
