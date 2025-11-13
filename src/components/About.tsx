import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  Globe,
  Briefcase,
  Gamepad2,
  Music,
  Book,
  Plane,
  Code2,
  Car,
  Camera,
  Volleyball
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: "Nacimiento", value: "02-09-2003" },
    { icon: Phone, label: "Teléfono", value: "+57 314-3814895" },
    { icon: Mail, label: "Email", value: "davidangelosorio29@gmail.com" },
    { icon: Globe, label: "Website", value: "www.davidangel.com" },
    { icon: MapPin, label: "Dirección", value: "Calle 49b sur #9-89" },
    { icon: Briefcase, label: "Cargo", value: "FREELANCE" },
  ];

  const interests = [
    {
      icon: Gamepad2,
      label: "Videojuegos",
      color: "from-purple-500 to-pink-500",
    },
    { icon: Volleyball, label: "Fútbol", color: "from-green-500 to-emerald-500" },
    { icon: Music, label: "Música", color: "from-blue-500 to-cyan-500" },
    { icon: Book, label: "Libros", color: "from-amber-500 to-orange-500" },
    { icon: Plane, label: "Viajar", color: "from-sky-500 to-blue-500" },
    { icon: Code2, label: "Programar", color: "from-primary to-tertiary" },
    { icon: Car, label: "Vehículos", color: "from-red-500 to-rose-500" },
    {
      icon: Camera,
      label: "Fotografía",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-[#01041b]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-jost font-bold text-primary-foreground leading-none">
            SOBRE
          </h1>
          <h1 className="text-9xl md:text-[8rem] lg:text-[8rem] font-anton font-bold text-primary-foreground leading-none">
            MI
          </h1>
        </div>

        {/* Personal Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {personalInfo.map((info) => (
            <Card
              key={info.label}
              className="p-6 hover:shadow-elegant transition-smooth border-border/50 bg-gradient-to-br from-card to-card/80"
            >
              <div className="flex items-start space-x-4">
                <div className="relative p-4 bg-gradient-to-br from-primary via-primary to-tertiary rounded-xl shadow-lg transform transition-transform hover:scale-110 hover:rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl"></div>
                  <info.icon className="h-6 w-6 text-white relative z-10 drop-shadow-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground font-jost">
                    {info.label}
                  </p>
                  <p className="font-medium text-foreground font-anton">{info.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interests Section */}
        <div className="mt-16">
          <h1 className="text-2xl font-jost font-bold text-primary-foreground leading-none">
            Intereses
          </h1>
          <h1 className="text-4xl md:text-[4rem] lg:text-[4rem] font-anton font-bold text-primary-foreground leading-none">
            Personales
          </h1>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mt-10">
            {interests.map((interest) => (
              <Card
                key={interest.label}
                className="group relative p-3 hover:shadow-glow transition-smooth border-none cursor-pointer bg-card font-jost overflow-hidden"
              >
                {/* Background de expansión con el color del gradiente */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-0 group-hover:scale-150 rounded-lg`}
                  style={{
                    transformOrigin: 'center center',
                  }}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${interest.color} group-hover:scale-110 transition-smooth group-hover:bg-white/20`}
                  >
                    <interest.icon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-xs font-medium text-foreground group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {interest.label}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
